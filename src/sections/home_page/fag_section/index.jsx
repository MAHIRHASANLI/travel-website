import React from "react";

import TitleSectionComponents from "../../../components/title_component";
import AccardionComponent from "../../../components/home_page/accardion_component";

import css from "./index.module.css";
import FagSliderComponent from "../../../components/home_page/fag_slider";

const FagSection = () => {
  return (
    <main className="fluid">
      <div className="container">
        <div className={css.fags} style={{ width: "100%" }}>
          {/* Sol tərəf - ŞƏKİL */}
          <div className={css.fag}>
            <FagSliderComponent />
          </div>

          {/* Sağ tərəf */}
          <div className={css.fag}>
            <div className={css.rightItemAndTop}>
              <div className={css.title_component}>
                <TitleSectionComponents
                  title="FAG"
                  description="The most popular questions that are of most interest to our customers"
                />
              </div>
              <div className={css.description}>
                <p>
                  We have collected the most popular questions to answer which
                  can help you with booking a tour.
                </p>
              </div>
            </div>

            {/* Akordeon komponenti */}
            <div className={css.questions}>
              {Array(4)
                .fill(null)
                .map((i, index) => (
                  <AccardionComponent key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FagSection;
