import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imgOtel1 from "../../../images/proposer1.avif";
import imgOtel2 from "../../../images/proposer2.avif";
import imgOtel3 from "../../../images/proposer3.avif";
import imgOtel4 from "../../../images/proposer4.jpg";
import imgOtel5 from "../../../images/proposer5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import "./tours.css";
import TitleSectionComponents from "../../../components/title_component";
const hotel1 = {
  id: 1,
  img: imgOtel1,
  oldPrice: 700,
  newPrice: "450",
  country: "Turkey",
};
const hotel2 = {
  id: 2,
  img: imgOtel2,
  oldPrice: 900,
  newPrice: "750",
  country: "Saudi Arabia",
};
const hotel3 = {
  id: 3,
  img: imgOtel3,
  oldPrice: 850,
  newPrice: "600",
  country: "United Arab Emirates (UAE)",
};
const hotel4 = {
  id: 4,
  img: imgOtel4,
  oldPrice: 900,
  newPrice: "550",
  country: " Italy",
};
const hotel5 = {
  id: 5,
  img: imgOtel5,
  oldPrice: 1100,
  newPrice: "850",
  country: "Egypt",
};
export const PopularTourImagesArray = [hotel1, hotel2, hotel3, hotel4, hotel5];
const PopularTours = () => {
  return (
    <div className="popularTours fluid">
      <div className="popularTours_item container">
        <TitleSectionComponents
          title="POPULAR TOURS"
          description="Let’s check-in most popular destinationt recomended."
        />

        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          className="mySwiper"
        >
          {Array(5)
            .fill(null)
            .map((item, i) => (
              <SwiperSlide key={i}>
                <div className="gridTemplate">
                  {PopularTourImagesArray &&
                    PopularTourImagesArray.map(
                      ({ img, country, oldPrice, newPrice, id }, index) => (
                        <div key={id} className={`img-${index} image-hotel`}>
                          <a href="*" className="detail-link">
                            <img src={img} alt="otelimage" />
                            <div className="hotel-info">
                              <h5>{country}</h5>
                              <p>
                                Discounted price: $ <span>{oldPrice}</span> - $
                                {newPrice}
                              </p>
                            </div>
                          </a>
                        </div>
                      )
                    )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTours;
