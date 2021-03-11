import { Plugin } from "unified";
import visit from "unist-util-visit";

export const Heading: Plugin = () => {
  return function (node) {
    visit(node, "heading", (node) => {
      let name = "";
      const children = node.children as any;
      if (children[0] && children[0].type === "text") {
        name = children[0].value;
      }
      node.data = {
        hProperties: { id: name.replace(/\s/g, "") },
      };
    });
  };
};
