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
import ButtonColorfull from "../../../components/buttons/button_colorful";

const PopularTours = () => {
  const array = [1, 2, 3, 4];
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
  const imagesArray = [hotel1, hotel2, hotel3, hotel4, hotel5];
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
          {array &&
            array.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="gridTemplate">
                  {imagesArray &&
                    imagesArray.map(
                      ({ img, country, oldPrice, newPrice, id }, index) => (
                        <div key={id} className={`img-${index} image-hotel`}>
                          <img src={img} alt="otelimage" />
                          <div className="hotel-info">
                            <h5>{country}</h5>
                            <p>
                              Discounted price: $ <span>{oldPrice}</span> - $
                              {newPrice}
                            </p>
                          </div>
                          <a href="*" className="detail-link">
                            <ButtonColorfull>See more</ButtonColorfull>
                          </a>
                        </div>
                      )
                    )}

                  {/* 
                  <div className="gridItem5">
                    <div>
                      <p>Antalya Tours</p>
                    </div>{" "}
                    <p>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </p>
                    <div></div>{" "}
                    <div>
                      <p>
                        During seven days, a journey through the ages awaits
                        you. Explore Antalya’s history by visiting its most
                        famous castels, surronded by equally beatifull lanscape
                      </p>
                    </div>{" "}
                    <div>
                      <p>Price from $700</p>
                    </div>
                  </div>
                 */}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTours;
