import React, { useState } from "react";
import { Link } from "gadget.js";

import styles from "@/components/sidebar/index.pure.scss";

export interface NodeData {
  name: string;
  url?: string;
  indent?: number;
  children: NodeData[];
}

export function Node(data: NodeData) {
  const [open, setOpen] = useState(true);

  function title() {
    if (data.url?.endsWith(".html")) {
      return (
        <Link
          html={{
            className: styles.title,
            style: { paddingLeft: data.indent },
          }}
          activeClassName={styles.active}
          href={data.url}
        >
          <i
            className={data.children.length ? "mi mi-arrow-drop-down" : ""}
          ></i>
          <span>{data.name}</span>
        </Link>
      );
    }
    return (
      <div className={styles.title} style={{ paddingLeft: data.indent }}>
        <i className={data.children.length ? "mi mi-arrow-drop-down" : ""}></i>
        <span>{data.name}</span>
      </div>
    );
  }

  return (
    <div
      className={[styles.node, open ? styles.open : ""].join(" ")}
      onClick={(evt) => {
        evt.stopPropagation();
        setOpen(!open);
      }}
    >
      {title()}
      <ul>
        {data.children.map((cd, i) => {
          const indent = data.indent ?? 0;
          return (
            <li key={i}>
              <Node {...cd} indent={indent + (data.children.length ? 15 : 0)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Sidebar(props: { className?: string; data: NodeData[] }) {
  return (
    <div className={[styles.sidebar, props.className].join(" ")}>
      {props.data.map((data, i) => (
        <Node key={i} {...data} />
      ))}
    </div>
  );
}
