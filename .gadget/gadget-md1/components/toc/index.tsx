import React, { useEffect, useState } from "react";
import styles from "@/components/toc/index.pure.scss";

export interface NodeData {
  name: string;
  anchor: string;
  active?: boolean;
  children: NodeData[];
}

export function Node(data: NodeData) {
  const [active, setActive] = useState(data.active);

  useEffect(() => {
    function handleHashChange() {
      setActive(data.anchor === decodeURIComponent(location.hash));
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [data]);

  return (
    <div className={styles.node}>
      <div className={styles.title}>
        <span>
          <a className={active ? styles.active : ""} href={data.anchor}>
            {data.name}
          </a>
        </span>
      </div>
      <ul>
        {data.children.map((data, i) => (
          <li key={i}>
            <Node {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Toc(props: { data: NodeData[] }) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);

    let spy: any;
    setTimeout(() => {
      try {
        if (document.querySelectorAll(`.${styles.toc} a`).length) {
          const Gumshoe = (window as any).Gumshoe;
          spy = new Gumshoe(`.${styles.toc} a`, {
            navClass: styles.active,
            offset: 89,
            reflow: true,
          });
        }
      } catch (error) {}
    }, 0);

    return () => {
      spy && spy.destroy();
    };
  }, [props.data]);

  return (
    <div className={styles.toc}>
      <ul>
        {data.map((data) => (
          <li key={JSON.stringify(data)}>
            <Node {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
