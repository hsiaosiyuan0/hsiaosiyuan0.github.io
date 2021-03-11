import React, { useEffect } from "react";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import gfm from "remark-gfm";
import { Head } from "gadget.js";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Toc } from "@/components/toc";
import { Heading } from "@/remark";
import type { Post } from "./post.data";

import styles from "@/pages/post.pure.scss";

export const outlet = "@/outlets/default.tsx";

var processor = unified()
  .use(markdown)
  .use(Heading)
  .use(gfm)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

export default function PostView(props: {
  data: { post: Post & { toc: any }; catalog: any; title: string };
}) {
  const { post, catalog, title } = props.data;

  useEffect(() => {
    window.scrollTo(0, 0);
    const Prism = (window as any).Prism;
    if (Prism) Prism.highlightAll();
  }, [props.data]);

  return (
    <div>
      <Header title={title} />
      <Sidebar className={styles.sidebar} data={catalog}></Sidebar>
      <div className={[styles.post, "line-numbers"].join(" ")}>
        <Head>
          <title>{post.rawMeta.title}</title>
        </Head>
        <div key={post.filename}>
          {processor.processSync(post.content).result as string}
        </div>
      </div>
      <Toc data={post.toc}></Toc>
      <div className={styles.copyright}>
        Made with{" "}
        <a target="_blank" href="https://github.com/hsiaosiyuan0/gadget">
          gadget
        </a>
      </div>
    </div>
  );
}
