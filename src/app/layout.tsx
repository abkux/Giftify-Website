import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutDev from "../components/AboutDev";
import Faqs from "../components/Faqs";

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
        <div className="relative grid grid-cols-1 md:grid-cols-2 m-2 md:m-8 gap-8">
          <AboutDev icon="https://media-net.abku.dev/logo.jpg" name="Abku" role="kekw breaker" description="always offline, hehe kew"/>
          <AboutDev icon="https://media-net.abku.dev/emofy.png" name="Emofy" role="kekw breaker" description="bot yes correct bot in team"/>
        </div>
        <Faqs question="eihfhs fkjeijfwi fwjoeofwjf wjfowofw fwjofkwofw fwkpfiw" answer="jkdjk dankfjaf aokfja  enanjkaefsh;fshjf wjebfjhwhf wfhiwhifhwif"/>
        <Footer />
      </body>
    </html>
  );
}
