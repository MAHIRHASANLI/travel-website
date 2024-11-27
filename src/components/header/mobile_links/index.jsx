import React from "react";
import css from "./index.module.css";

const MobileLinks = ({ isOpen }) => {
  return (
    <div
      className={css["mobile-sidebar"]}
      style={{ right: `${isOpen ? 0 : "-100%"}` }}
    >
      <div className={css["links-item"]}>
        <a href="*">Home</a>
        <a href="*">Hotel List</a>
        <a href="*">Booking Confirm</a>
      </div>
    </div>
  );
};

export default MobileLinks;
