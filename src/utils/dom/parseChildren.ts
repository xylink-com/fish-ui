import React from "react";
import toArray from "./toArray";

export function parseChildren(
  children: React.ReactNode,
  suffixKey? = "",
  role? = null
) {
  return toArray(children)
    .map((node: React.ReactElement) => {
      // react 组件的类型 React.ReactElement<Props>
      if (React.isValidElement(node)) {
        const key = node.key
          ? String(node.key)
          : "xy-item-" + parseInt(Math.random() * 1000) + suffixKey;
        return {
          key,
          ...node.props,
          node,
          role,
        };
      }

      return null;
    })
    .filter((node) => node);
}

export function parseChildrenTree(children: React.ReactNode, role? = null) {
  return toArray(children)
    .map((node: React.ReactElement) => {
      // react 组件的类型 React.ReactElement<Props>
      if (React.isValidElement(node)) {
        let nextChildren = node.props?.children;
        const hasNextChildren: boolean =
          nextChildren &&
          typeof nextChildren === "object" &&
          !!nextChildren?.length;
        if (hasNextChildren) {
          nextChildren = parseChildrenTree(nextChildren, role);
        }
        const key = node.key
          ? String(node.key)
          : "xy-item-" + parseInt(Math.random() * 1000);
        return {
          key,
          hasNextChildren,
          nextChildren,
          ...node.props,
          node,
          role,
        };
      } else return null;
    })
    .filter((node) => node);
}

export default { parseChildren, parseChildrenTree };
