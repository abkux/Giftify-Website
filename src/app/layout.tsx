import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giftify - Giveaways Made Simple",
  description:
    "Welcome to Giftify Bot's website! We make giveaways simple and fun, allowing you to create, manage, and participate in exciting giveaways. Join now and start spreading joy!",
  icons: {
    icon: "/giftify_circle.png",
  },
  openGraph: {
    title: "Giftify - Giveaways Made Simple",
    description:
      "Welcome to Giftify Bot's website! We make giveaways simple and fun, allowing you to create, manage, and participate in exciting giveaways. Join now and start spreading joy!",
    type: "website",
    siteName: "Giftify",
    images: [
      {
        url: "/banner.png",
      },
    ],
    url: "https://giftifybot.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/banner.png",
      },
    ],
    description:
      "Welcome to Giftify Bot's website! We make giveaways simple and fun, allowing you to create, manage, and participate in exciting giveaways. Join now and start spreading joy!",
  },
  themeColor: "#cb3045",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
