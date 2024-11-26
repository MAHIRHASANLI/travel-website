import React from "react";
import css from "./index.module.css";

const LocationInputComponent = () => {
  return (
    <div className={css.input}>
      <label>Location</label>
      <input type="text" placeholder="Placeholder text" />
    </div>
  );
};

export default LocationInputComponent;
