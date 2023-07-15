
import GiftifyLogo from '../assets/giftify_circle.png';
import LinkButton from './LinkButton';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 py-16">
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-8 md:pb-16 flex flex-col md:flex-row justify-between items-center rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="text-white text-center md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Giftify</h1>
          <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex justify-center">
            <LinkButton children="Invite" />
          </div>
        </div>
        <div className="relative md:mr-5 hidden md:block">
          <img
            src={GiftifyLogo}
            className="h-64 w-64 md:h-80 md:w-80 transform transition-transform duration-500 hover:scale-105"
            alt="Giftify Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
