import Link from "next/link";
import {
  GiftIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import Feature from "../components/Feature";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 pt-16 md:pb-16" id="">
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-8 md:pb-16 flex flex-col md:flex-row justify-between items-center md:rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
          <div className="text-white text-center md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Giftify</h1>
            <p className="text-lg mb-6">
              An efficient giveaway bot that simplifies hosting highly
              customizable giveaways with ease.
            </p>
            <div className="flex justify-center">
              <Link
                href="/invite"
                className="bg-pink-500 hover:bg-pink-400 text-white font-semibold h-12 px-6 md:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto transition-all duration-500 transform hover:scale-110"
                target="_blank"
              >
                Invite
              </Link>
            </div>
          </div>
          <div className="relative md:mr-5 hidden md:block">
            <img
              src="/giftify_circle.png"
              className="h-64 w-64 md:h-80 md:w-80 transform transition-transform duration-500 hover:scale-105"
              alt="Giftify Logo"
            />
          </div>
        </div>
      </section>
      <div className="h-0.5 bg-slate-700"></div>
      {/* Features */}
      <section className="bg-gray-800 py-16" id="features">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={<GiftIcon className="text-white h-10 w-10" />}
              title="Giveaways"
              description="Giftify streamlines the process of hosting giveaways, providing a user-friendly interface for creating and managing exciting events with extensive customization options, ensuring an enjoyable experience for all participants."
            />
            <Feature
              icon={<ClockIcon className="text-white h-10 w-10" />}
              title="Timers"
              description="With built-in timer functionality, Giftify keeps track of giveaway durations, automatically ending them at the specified time. This feature eliminates the need for manual monitoring, allowing hosts to focus on other tasks while maintaining fairness and efficiency."
            />
            <Feature
              icon={<CreditCardIcon className="text-white h-10 w-10" />}
              title="Donation Tracking"
              description="Giftify goes beyond giveaways by offering donation tracking capabilities. It enables hosts to effortlessly track and display contributions, ensuring transparency and recognition for generous contributors, fostering a supportive and engaging community."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
