import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import image from "../../../images/travel.webp";

import css from "./index.module.css";

const WorkSliderComponent = () => {
  return (
    <Swiper
      //   effect={"fade"}
      className="mySwiper"
    >
      {/* {Array(5)
        .fill(null)
        .map((_, index) => ( */}
      <SwiperSlide>
        <div className={css["img-hotel"]}>
          <img src={image} alt="img" />
        </div>
      </SwiperSlide>
      {/* ))} */}
    </Swiper>
  );
};

export default WorkSliderComponent;
