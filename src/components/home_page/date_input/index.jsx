import React, { useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import css from "./index.module.css";

const DateInputComponent = () => {
  const [isOpenDate, setIsOpenDate] = useState(false);

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const dateRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dateRef.current && !dateRef.current.contains(event.target)) {
      setIsOpenDate(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  const handleFocus = (event) => {
    setIsOpenDate(true);
    event.preventDefault();
  };

  return (
    <div className={css.input}>
      <label>Check in - Check out</label>
      <div>
        <input
          type="text"
          onFocus={handleFocus}
          value={`${date.startDate.toLocaleDateString()} - ${date.endDate.toLocaleDateString()}`}
          readOnly
        />
        {isOpenDate && (
          <div ref={dateRef} className={css["date"]}>
            <DateRangePicker
              ranges={[date]}
              onChange={handleChange}
              minDate={new Date()}
              showDateDisplay={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateInputComponent;
