import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import {
  EventBus,
  EventAfterRouteChanged,
  EventBeforeRouteChanged,
} from "gadget.js";
import { DocSearch } from "@docsearch/react";

import styles from "@/components/header/index.pure.scss";

export function scrollToAnchor(hash: string, offset: number) {
  const id = decodeURIComponent(hash).replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    var position = window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo(0, position - offset);
  }
}

let offset = 89;
function hackClick(mouseEvent: MouseEvent) {
  const { hash, pathname } = (mouseEvent.target as any) as Location;
  if (hash) {
    if (window.location.pathname === pathname) {
      mouseEvent.preventDefault();
      if (window.location.hash === hash) {
        scrollToAnchor(hash, offset);
      } else {
        window.location.hash = hash;
      }
    }
  }
}

export interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const bar = useRef<any>(null);

  useEffect(() => {
    function handleHashChange() {
      scrollToAnchor(window.location.hash, offset);
    }

    document.addEventListener("click", hackClick);
    window.addEventListener("hashchange", handleHashChange);
    () => {
      document.removeEventListener("click", hackClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  });

  useEffect(() => {
    EventBus.on(EventBeforeRouteChanged, () => {
      bar.current?.continuousStart();
    });
    EventBus.on(EventAfterRouteChanged, () => {
      bar.current?.complete();
    });
  }, []);

  return (
    <>
      <LoadingBar color="#2998ff" ref={bar} shadow={true} />
      <div className={styles.header}>
        <div className={styles.title}>{props.title}</div>

        <div style={{ paddingRight: 20 }}>
          <DocSearch
            appId="299FUZ9D59"
            indexName="docs"
            apiKey="a7ffa344b9b153f296727ffdf841953d"
          />
        </div>

        <div className={styles.sitemap}>
          <a href="/sitemap.html">all</a>
        </div>
      </div>
    </>
  );
}
