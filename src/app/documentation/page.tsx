"use client";

import { useEffect } from "react";

const Documentation = () => {
  useEffect(() => {
    window.location.href = "/";
    window.open("https://giftify.gitbook.io", "_blank");
  }, []);
  return <></>;
};

export default Documentation;
