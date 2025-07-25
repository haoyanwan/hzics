import { useEffect } from 'react';
import HeroSection from './HeroSection/HeroSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import CustomerExamples from './CustomerExamples/CustomerExamples';
import SolutionsSection from './SolutionsSection/SolutionsSection';
import AboutUs from './AboutUs/AboutUs';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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