import React, { useEffect } from "react";

export const outlet = "@/outlets/default.tsx";

export default function Index(props: any) {
  useEffect(() => {
    window.location.href = `/post/${props.data.entry}.html`;
  }, []);
  return <></>;
}
