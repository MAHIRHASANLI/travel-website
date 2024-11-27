import React from "react";
import TitleSectionComponents from "../../../components/title_component";
import ReviewsSlider from "../../../components/home_page/reviews_slider";
import css from "./index.module.css";

const Reviews = () => {
  return (
    <div className={`${css.reviews} fluid`}>
      <div className={`${css.reviews_item} container`}>
        <TitleSectionComponents
          title="REVIEWS"
          description="What our customers say about their experience travel with us."
        />

        <div className={css.description}>
          <p>
            We have collected the most extensive reviews of our customers about
            their experiences and emotions during tours with us.
          </p>
        </div>
        {/*  SLider */}
        <ReviewsSlider />
      </div>
    </div>
  );
};

export default Reviews;
