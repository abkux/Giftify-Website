"use client";

import { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    window.location.href = "/";
    window.open("https://discord.com/invite/GQSGChbEKz", "_blank");
  }, []);
  return <></>;
};

export default Support;
