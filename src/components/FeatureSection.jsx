import { GiftIcon, ClockIcon, CreditCardIcon } from "@heroicons/react/24/outline";

const FeatureSection = () => {
  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <div className="icon-container">
              <GiftIcon className="icon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <div className="icon-container">
              <ClockIcon className="icon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-white flex flex-col items-center justify-center text-center">
            <div className="icon-container">
              <CreditCardIcon className="icon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
