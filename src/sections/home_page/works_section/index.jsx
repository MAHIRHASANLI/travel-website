import React from "react";
import css from "./index.module.css";
import TitleSectionComponents from "../../../components/title_component";

import WorkSliderComponent from "../../../components/home_page/works_slider";

const HowItWorks = () => {
  return (
    <div className="fluid">
      <div className={`${css.works} container`}>
        <div className={css["title-sect"]}>
          <TitleSectionComponents
            title="HOW IT WORKS"
            description="Here are the main three steps how you can book the trip of your
              dreams"
          />
        </div>
        <div className={css.description}>
          <p>
            When planning your trips with us, you will spend a minimum of time
            and get a maximum of emotions and memories.
          </p>
        </div>
        <div className={css["works-grid"]}>
          {/* left */}
          <div className={css["grid-first-item"]}>
            <WorkSliderComponent />
          </div>

          {/* Right */}
          <div className={css["grid-last-item"]}>
            <div className={css.turLists}>
              <div>
                <h4> 01 &nbsp;CHOOSE DESTINATION</h4>
              </div>
              <p>Select the city or country you wish to explore.</p>
            </div>

            <div className={css.turLists}>
              <div>
                <h4> 02 &nbsp; Airport to Hotel Taxi Service</h4>
              </div>
              <p>
                Enjoy a convenient transfer from the airport to your hotel with
                our reliable taxi service.
              </p>
            </div>

            <div className={css.turLists}>
              <h4>03 &nbsp;MAKE YOUR PAYMENT</h4>
              <p>
                After choosing a tour, proceed to fill in the information
                required for booking. Complete the payment.
              </p>
            </div>

            <div className={css.turLists}>
              <h4>04 &nbsp;CHECK YOUR EMAIL</h4>
              <p>
                After choosing a tour, proceed to fill in the information
                required for booking. Complete the payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
