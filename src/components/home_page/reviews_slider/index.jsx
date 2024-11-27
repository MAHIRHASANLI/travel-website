import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import img from "../../../images/expediav2-421226-dfdf55-333388.jpg";
import "swiper/css";
import "swiper/css/pagination";

import css from "./index.module.css";
import { Autoplay, Navigation } from "swiper/modules";

const ReviewsSlider = () => {
  const array = [
    {
      name: "John",
      country: "Misir",
      date: "August 2023",
      hotel: "Royal Lands Tour",
      img: img,
      comment:
        " Lorem ipsum dolor sit amet consectetur. Scelerisque eget egestas consectetur urna porttitor diam. Molestie ut est est tortor morbi sed. Enim pulvinar hendrerit massa vulputate tempus. Diam feugiat massa viverra mollis. Mauris tortor sed ipsum non dolor massa lectus ultrices in. Fames egestas neque commodo cursus faucibus. Pellentesque magna urna faucibus egestas morbi dolor.",
    },
    {
      name: "Osman",
      country: "Saudi Arabi",
      date: "March 2024",
      hotel: "Royal Lands Tour",
      img: img,
      comment:
        " Lorem ipsum dolor sit amet consectetur. Scelerisque eget egestas consectetur urna porttitor diam. Molestie ut est est tortor morbi sed. Enim pulvinar hendrerit massa vulputate tempus. Diam feugiat massa viverra mollis. Mauris tortor sed ipsum non dolor massa lectus ultrices in. Fames egestas neque commodo cursus faucibus. Pellentesque magna urna faucibus egestas morbi dolor.",
    },
    {
      name: "Silvester",
      country: "Italy",
      date: "March 2023",
      hotel: "Royal Lands Tour",
      img: img,
      comment:
        " Lorem ipsum dolor sit amet consectetur. Scelerisque eget egestas consectetur urna porttitor diam. Molestie ut est est tortor morbi sed. Enim pulvinar hendrerit massa vulputate tempus. Diam feugiat massa viverra mollis. Mauris tortor sed ipsum non dolor massa lectus ultrices in. Fames egestas neque commodo cursus faucibus. Pellentesque magna urna faucibus egestas morbi dolor.",
    },
  ];
  return (
    <Swiper
      navigation={true}
      loop={true}
      spaceBetween={30}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        850: {
          slidesPerView: 2,
        },
        1540: {
          slidesPerView: 3,
        },
      }}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      className="mySwiper"
    >
      {array &&
        array.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
            className={css.swiperSlider}
          >
            <div className={css.swiperSliderItem}>
              <div className={css.left_item}>
                <div>
                  <img src={item.img} alt="" />
                  <h5>{item.name}</h5>
                </div>
                <div>
                  <p>{item.country}</p>
                  <span>{item.date}</span>
                </div>
              </div>

              {/* //// */}
              <div className={css.right_item}>
                <div>
                  <h5>{item.hotel}</h5>
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div>
                  <p>{item.comment}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ReviewsSlider;
