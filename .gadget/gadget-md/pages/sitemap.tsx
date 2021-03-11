import React from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const outlet = "@/outlets/default.tsx";

export default function Sitemap(props: any) {
  const { catalog, title } = props.data;
  return (
    <div>
      <Header title={title} />
      <Sidebar data={catalog}></Sidebar>
    </div>
  );
}
