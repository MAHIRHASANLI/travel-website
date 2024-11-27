import React from "react";
import css from "./index.module.css";

import image from "../../../images/heroSectionImg.jpg";
import TravelSearchComponent from "../../../components/home_page/travel_search_wrapper";

const HeroSection = () => {
  return (
    <div
      className={`${css.hero} fluid`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={`${css.hero_item} container`}>
        <div className={css.content}>
          <h1>
            Your Adventure Travel Expert in <span>'LOGO'</span>
          </h1>
        </div>
        <TravelSearchComponent />
      </div>
    </div>
  );
};

export default HeroSection;
