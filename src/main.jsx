import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

// CSS
import "./index.css";

// Page Imports
import App from "./App";
import Home from "./pages/Home";

// URLs
const inviteUrl =
  "https://discord.com/api/oauth2/authorize?client_id=1089552642696552488&permissions=511040&redirect_uri=https%3A%2F%2Fdiscord.gg%2FGQSGChbEKz&response_type=code&scope=bot%20applications.commands";
const supportUrl = "https://discord.gg/GQSGChbEKz";
const voteUrl = "https://top.gg/bot/1089552642696552488/vote";
const docsUrl = "https://giftify.gitbook.io/";

const handleRedirect = (url) => {
  window.open(url, "_blank");
  return redirect("/");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        index: true,
        element: <Home />
      },
      // {
      //   path: "/status",
      //   element: <Status />
      // },
      // Redirects
      {
        path: "/invite",
        loader: () => handleRedirect(inviteUrl),
      },
      {
        path: "/support",
        loader: () => handleRedirect(supportUrl),
      },
      {
        path: "/vote",
        loader: () => handleRedirect(voteUrl),
      },
      {
        path: "/documentation",
        loader: () => handleRedirect(docsUrl),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
