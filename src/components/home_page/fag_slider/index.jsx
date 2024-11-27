import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../images/expediav2-421226-dfdf55-333388.jpg";
import "swiper/css";
import css from "./index.module.css";
import { Autoplay } from "swiper/modules";
import { PopularTourImagesArray } from "../../../sections/home_page/popular_tours";

const FagSliderComponent = () => {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      className="mySwiper"
    >
      {PopularTourImagesArray &&
        PopularTourImagesArray.map(
          ({ img, country, oldPrice, newPrice }, index) => (
            <SwiperSlide className={css.slider} key={index}>
              <img src={img} alt="" className={css.image} />
              <a href="*" className="detail-link">
                <img src={img} alt="otelimage" />
                <div className={css["hotel-info"]}>
                  <h5>{country}</h5>
                  <p>
                    Discounted price: $ <span>{oldPrice}</span> - $ {newPrice}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          )
        )}
    </Swiper>
  );
};

export default FagSliderComponent;
