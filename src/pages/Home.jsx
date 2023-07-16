import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="h-0.5 bg-slate-700"></div>
      <FeatureSection />
    </>
  );
}

export default HomePage;
