import HeroSection from "./HeroSection";
import ProductScreen from "./ProductScreen";
import ResourcesScreen from "./ResourcesScreen";
import ExpComp from "./ExpComp";

const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <ExpComp />
      <ProductScreen />
      <ResourcesScreen />
    </>
  );
};

export default HomeScreen;
