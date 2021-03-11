import { Node } from "unist";
import { Plugin } from "unified";
import visit from "unist-util-visit";

const rOpen = /^:::([a-zA-Z_0-9][a-zA-Z_0-9-]*)/;
const rClose = /\n:::\s*$/;

function isAlertNode(
  node: Node & { children?: Array<Node & { value?: string }> }
) {
  if (!node.children) return false;

  const fist = node.children[0];
  const last = node.children[node.children.length - 1];
  return rOpen.test(fist.value || "") && rClose.test(last.value || "");
}

function transform(
  node: Node & { children: Array<Node & { value: string }> }
) {
  const fist = node.children[0];
  const last = node.children[node.children.length - 1];
  // fist.value =
}

export const Alert: Plugin = () => {
  return function (node) {
    visit(node, "paragraph", (node: Node & { value?: string }) => {
      if (isAlertNode(node)) console.log(node);
    });
  };
};
