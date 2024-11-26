import React from "react";
import css from "./index.module.css";

const TitleSectionComponents = ({ title = "", description = "" }) => {
  return (
    <div className={css["sec-title"]}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TitleSectionComponents;
