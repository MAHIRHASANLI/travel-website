import React from "react";
import HeroSection from "../../sections/home_page/hero_section";
import ExploreWorld from "../../sections/home_page/other_countries";
import Reviews from "../../sections/home_page/reviews_section";
import FagSection from "../../sections/home_page/fag_section";
import PopularTours from "../../sections/home_page/popular_tours";
import HowItWorks from "../../sections/home_page/works_section";

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
