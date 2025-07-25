import HeroSection from './HeroSection/HeroSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import CustomerExamples from './CustomerExamples/CustomerExamples';
import SolutionsSection from './SolutionsSection/SolutionsSection';
import AboutUs from './AboutUs/AboutUs';
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CustomerExamples />
      <SolutionsSection />
      <AboutUs />
    </>
  );
}