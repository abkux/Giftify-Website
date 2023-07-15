import {
  GiftIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import Feature from "./Feature";

const FeatureSection = () => {
  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<GiftIcon className="icon" />}
            title="Giveaways"
            description="Giftify streamlines the process of hosting giveaways, providing a user-friendly interface for creating and managing exciting events with extensive customization options, ensuring an enjoyable experience for all participants."
          />
          <Feature
            icon={<ClockIcon className="icon" />}
            title="Timers"
            description="With built-in timer functionality, Giftify keeps track of giveaway durations, automatically ending them at the specified time. This feature eliminates the need for manual monitoring, allowing hosts to focus on other tasks while maintaining fairness and efficiency."
          />
          <Feature
            icon={<CreditCardIcon className="icon" />}
            title="Donation Tracking"
            description="Giftify goes beyond giveaways by offering donation tracking capabilities. It enables hosts to effortlessly track and display contributions, ensuring transparency and recognition for generous contributors, fostering a supportive and engaging community."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
