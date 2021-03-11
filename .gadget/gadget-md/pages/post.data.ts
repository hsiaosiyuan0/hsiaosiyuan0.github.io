import fs from "fs";
import path from "path";
import yaml from "yaml";
import unified from "unified";
import markdown from "remark-parse";
import unist from "unist";
import vfile from "vfile";
import {
  WORDS,
  BASENAME,
  catalogFilename,
  retrieveConfig,
  readCtgMeta,
} from "../common";

export interface RawMeta {
  slug?: string;
  keywords?: string[];
  [k: string]: any;
}

export interface Post {
  filename: string;
  rawMeta: RawMeta;
  slug: string;
  keywords: string[];
  content: string;
  mtime: number;
}

export interface Category {
  filename: string;
  rawMeta: RawMeta;
  slug: string;
  keywords: string[];
  mtime: number;
  children: Array<Post | Category>;
}

async function walkDir<T>(
  root: string,
  ctx: T,
  cb: (ctx: T, file: string, meta: fs.Dirent) => Promise<void>
) {
  const dir = await fs.promises.opendir(root);
  for await (const dirent of dir) {
    if (dirent.name.startsWith(".")) continue;

    const filepath = path.join(root, dirent.name);
    await cb(ctx, filepath, dirent);
    if (dirent.isDirectory()) {
      await walkDir(filepath, ctx, cb);
    }
  }
}

export interface ScanPostsContext {
  category?: Category;
}

function extractMdMeta(content: string): RawMeta {
  const matched = content.match(/\s*<!--([\s\S]*?)-->/m);
  if (matched && matched.length === 2) {
    try {
      const meta = yaml.parse(matched[1]);
      if (meta && typeof meta === "object") return meta;
    } catch (error) {}
  }
  return {};
}

function readPostInlineTitle(content: string) {
  const matched = content.match(/^#\s([^#\r\n]+)\r?\n?/);
  if (matched && matched.length === 2) {
    return matched[1];
  }
  return undefined;
}

function readPostMdMeta(content: string): Record<string, any> {
  try {
    const matched = content.match(/\s*<!--([\s\S]*?)-->/m);
    let ret: any = {};
    if (matched && matched.length === 2) {
      const meta = yaml.parse(matched[1]);
      if (meta && typeof meta === "object") {
        ret = meta;
      }
    }
    if (!ret.title) {
      ret.title = readPostInlineTitle(content);
    }
    return ret;
  } catch (error) {}

  return {};
}

/**
 * recursively scan the `dir` on the file system to find out all the posts
 *
 * @param dir
 */
export async function scanPosts(dir: string) {
  const posts: Post[] = [];
  await walkDir<ScanPostsContext>(dir, {}, async (ctx, file, meta) => {
    const stats = await fs.promises.stat(file);
    const filename = path.parse(file).name;
    const pathStr = path.parse(file).dir.replace(dir, "");
    if (meta.isFile()) {
      const content = (await fs.promises.readFile(file)).toString();
      const rawMeta = extractMdMeta(content);
      const slug = `${pathStr}/${rawMeta.slug ?? filename}`;
      const post: Post = {
        filename,
        rawMeta,
        content,
        slug,
        keywords: rawMeta.keywords ?? [],
        mtime: Math.floor(stats.mtimeMs),
      };
      if (ctx.category) {
        ctx.category.children.push(post);
      }
      posts.push(post);
    } else if (meta.isDirectory()) {
      if (fs.existsSync(path.join(path.parse(file).dir, ".ignore"))) return;

      const rawMeta = await readCtgMeta(file);
      const slug = `${pathStr}/${rawMeta.slug ?? filename}`;
      ctx.category = {
        filename,
        rawMeta,
        slug,
        keywords: rawMeta.keywords ?? [],
        mtime: Math.floor(stats.mtimeMs),
        children: [],
      };
    }
  });
  return posts;
}

export type VisitorHandler = (
  ctx: { [k: string]: any },
  node: unist.Node,
  idx: number,
  parent?: unist.Node
) => void;

/**
 * a helper to recursively visit the node by using the depth-first algorithm
 *
 * @param ctx
 * @param node
 * @param visitor
 * @param parent
 */
async function visitNode(
  ctx: { [k: string]: any },
  node: unist.Node,
  visitor: {
    [k: string]:
      | VisitorHandler
      | { before?: VisitorHandler; after?: VisitorHandler };
  },
  parent?: unist.Node
) {
  const v = visitor[node.type];
  if (v) {
    if (typeof v === "function") {
      v(ctx, node, 0, parent);
    } else if (v.before) {
      v.before(ctx, node, 0, parent);
    }
  }
  if (Array.isArray(node.children)) {
    (node.children as unist.Node[]).forEach((child) =>
      visitNode(ctx, child, visitor, node)
    );
  }
  if (v && typeof v !== "function" && v.after) {
    v.after(ctx, node, 0, parent);
  }
}

export interface CatalogItem {
  name: string;
  url?: string;
  children: CatalogItem[];
}

/**
 * it's little bit hard to imagine the node hierarchies of `list` in remark's ast,
 * since remark's ast is somewhat verbose, consider to paste the markdown content
 * of your list into https://astexplorer.net/ to find out the ast
 *
 * @param node
 */
function getListItemName(node: any): string | undefined {
  if (
    Array.isArray(node.children) &&
    node.children[0] &&
    node.children[0].type === "paragraph" &&
    node.children[0].children[0] &&
    node.children[0].children[0].type === "text"
  ) {
    return node.children[0].children[0].value;
  }
  return undefined;
}

function getListItemLink(
  node: any
): { name?: string; url: string } | undefined {
  if (
    Array.isArray(node.children) &&
    node.children[0] &&
    node.children[0].type === "paragraph" &&
    node.children[0].children[0] &&
    node.children[0].children[0].type === "link"
  ) {
    let name: string | undefined;
    if (node.children[0].children[0].children[0]) {
      name = node.children[0].children[0].children[0].value;
    }
    return {
      name,
      url: node.children[0].children[0].url,
    };
  }
  return undefined;
}

async function processCatalog(root: string) {
  const file = vfile({ path: path.join(root, catalogFilename) });
  file.contents = (await fs.promises.readFile((file as any).path)).toString();

  const links: { name: string; url: string; file: string }[] = [];
  const ctx: any = {
    parent: {
      children: [],
    },
    parents: [],
  };

  await unified()
    .use(markdown)
    .use(function () {
      // below is a `it just works` pattern, maybe here it's better
      // to use a plugin instead of a compiler, this is because in
      // remark's semantic the job of a compiler is doing the ast
      // transformation
      this.Compiler = function (node) {
        visitNode(ctx, node, {
          listItem: {
            before(ctx, node) {
              const link = getListItemLink(node);
              const name = getListItemName(node);
              let item: any = {};
              if (link) {
                if (link.name && link.url) {
                  const { name, url } = link;
                  let u =
                    (BASENAME.endsWith("/") ? BASENAME : BASENAME + "/") +
                    "post" +
                    url;
                  if (link.url.startsWith("/") && link.url.endsWith(".md")) {
                    u = u.slice(0, u.lastIndexOf(".")) + ".html";
                  }
                  links.push({
                    name,
                    url: u,
                    file: path.join(root, decodeURIComponent(url)),
                  });

                  item = {
                    name,
                    url: u,
                    children: [],
                  };
                }
              } else if (name) {
                item = { name, children: [] };
              }

              ctx.parent.children.push(item);
              ctx.parents.push(ctx.parent);
              ctx.parent = item;
            },
            after(ctx) {
              ctx.parent = ctx.parents.pop();
            },
          },
        });

        return "";
      };
    })
    .process(file);

  const posts = await Promise.all(
    links.map(async (link) => {
      const file = link.file;
      const stats = await fs.promises.stat(file);
      const filename = path.parse(file).name;
      const pathStr = path.parse(file).dir.replace(root, "");
      let content = "";
      try {
        content = (await fs.promises.readFile(file)).toString();
      } catch (error) {}
      const rawMeta = readPostMdMeta(content);
      if (!rawMeta.title) rawMeta["title"] = filename;

      const slug = `${pathStr}/${rawMeta.slug ?? filename}`;
      const toc = await tocOfContent(content);
      return {
        filename,
        rawMeta,
        content,
        slug,
        toc,
        keywords: rawMeta.keywords ?? [],
        mtime: Math.floor(stats.mtimeMs),
      };
    })
  );

  const catalog: any[] = ctx.parent.children;
  return { posts, catalog };
}

type Node = unist.Node & {
  children: Array<Node>;
  depth: number;
  value: string;
};
export async function tocOfContent(contents: string) {
  const file = vfile({ contents });

  const root = {
    depth: 0,
    children: [],
  };
  const ctx: any = {
    depth: root.depth,
    parent: root,
    parents: [],
  };

  await unified()
    .use(markdown)
    .use(function () {
      this.Compiler = function (node) {
        visitNode(ctx, node, {
          heading: {
            before(ctx, node: Node) {
              if (node.depth === 1) return;

              let name = "";
              const children = node.children;
              if (children[0] && children[0].type === "text") {
                name = children[0].value;
              }
              const anchor = "#" + decodeURIComponent(name).replace(/\s/g, "");
              const item = {
                name,
                depth: node.depth,
                anchor,
                children: [],
              };
              if (node.depth > ctx.depth) {
                ctx.parent.children.push(item);
                ctx.parents.push(ctx.parent);
                ctx.parent = item;
              } else {
                let parent: any;
                do {
                  parent = ctx.parents.pop();
                } while (parent.depth >= node.depth);
                parent.children.push(item);
                ctx.parents.push(parent);
                ctx.parent = item;
              }

              ctx.depth = node.depth;
            },
          },
        });

        return "";
      };
    })
    .process(file);

  return root.children;
}

export default async () => {
  const store = path.join(WORDS);
  const { posts, catalog } = await processCatalog(store);
  const meta = await retrieveConfig();
  return posts.map((post) => ({
    route: post.slug ?? post.filename,
    data: {
      post,
      catalog,
      title: meta.title,
    },
  }));
};
