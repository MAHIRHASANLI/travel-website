import React from "react";
import HeroSection from "../../sections/home_page/hero_section";
import HowItWorks from "../../sections/home_page/Worksh";
import ExploreWorld from "../../sections/home_page/ExploreWorld";
import Reviews from "../../sections/home_page/Reviews";
import FagSection from "../../sections/home_page/Fag";
import PopularTours from "../../sections/home_page/popular_tours";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <PopularTours />
      <HowItWorks />
      <ExploreWorld />
      <Reviews />
      <FagSection />
    </React.Fragment>
  );
};

export default HomeContainer;
