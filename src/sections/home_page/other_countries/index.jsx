import React from "react";
import css from "./index.module.css";
import TitleSectionComponents from "../../../components/title_component";
import OtherCountriesComponnet from "../../../components/home_page/other_countries_component";
import { GoArrowRight } from "react-icons/go";

const ExploreWorld = () => {
  return (
    <div className="fluid">
      <div className="container">
        <div className={css.exploreWorld}>
          <div className={css.sectionName}>
            <TitleSectionComponents
              title="EXPLORE THE WORLD"
              description="Explore beautiful, Muslim-friendly destinations worldwide, offering unforgettable experiences while respecting your values and needs."
            />
            <a href="*" className={css.viewMore}>
              <span>View More</span>
              <GoArrowRight />
            </a>
          </div>

          <OtherCountriesComponnet />
        </div>
      </div>
    </div>
  );
};

export default ExploreWorld;
