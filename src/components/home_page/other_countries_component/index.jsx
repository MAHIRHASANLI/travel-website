import React from "react";
import css from "./index.module.css";
import { GoArrowSwitch } from "react-icons/go";
import img1 from "../../../images/mekke-img.jfif";
import img2 from "../../../images/medine-img.webp";
import img3 from "../../../images/dubai-img.jpg";
import img4 from "../../../images/istanbul-img.webp";
const OtherCountriesComponnet = () => {
  const array = [
    { img: img1, country: "Sauidi Arabi" },
    { img: img2, country: "Sauidi Arabi" },
    { img: img3, country: "United Arab Emirates" },
    { img: img4, country: "Turkey" },
  ];
  return (
    <div className={css.container}>
      {array &&
        array.map(({ img, country }, index) => (
          <div key={index} className={css.exploreWorld_item}>
            <a href="*">
              <div>
                <img src={img} alt="" />
              </div>
              <div className={css.exploreWorld_count}>
                <div className={css.names}>
                  <p>Baku</p> <GoArrowSwitch /> <p>{country}</p>
                </div>
                <div className={css.date}>
                  <p>Round trip</p>
                  <p>|</p>
                  <p>Tue, Oct 26 - Tue, Dec 12</p>
                </div>
                <div className={css.price}>
                  <p>$1025</p>
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default OtherCountriesComponnet;
