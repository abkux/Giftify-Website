"use client";

import { useEffect } from "react";

const Invite = () => {
  useEffect(() => {
    window.location.href = "/";
    window.open(
      "https://discord.com/api/oauth2/authorize?client_id=1089552642696552488&permissions=511040&redirect_uri=https%3A%2F%2Fdiscord.gg%2FGQSGChbEKz&response_type=code&scope=bot%20applications.commands",
      "_blank"
    );
  }, []);
  return <></>;
};

export default Invite;
