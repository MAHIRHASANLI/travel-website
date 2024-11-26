import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import css from "./index.module.css";

const GuestInputComponent = () => {
  const [isOpenGuest, setIsOpenGuest] = useState(false);
  const [adulitCount, setAdulitCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);

  const choosRef = useRef(null);
  const guestRef = useRef(null);

  useEffect(() => {
    function removeChooses(event) {
      if (
        choosRef.current &&
        !choosRef.current.contains(event.target) &&
        guestRef.current &&
        !guestRef.current.contains(event.target)
      ) {
        setIsOpenGuest(false);
      }
    }

    document.addEventListener("mousedown", removeChooses);

    return () => {
      document.removeEventListener("mousedown", removeChooses); // Cleanup on unmount
    };
  }, []);

  return (
    <div className={css.choose}>
      <label>Guest</label>
      <div
        ref={choosRef}
        onClick={() => setIsOpenGuest(!isOpenGuest)}
        className={css.input}
        style={{
          border: isOpenGuest
            ? "1px solid rgba(33, 65, 183, 1)"
            : "1px solid rgba(213, 212, 220, 1)",
        }}
      >
        <span>
          {adulitCount < 1 && childCount < 1 && roomCount < 1
            ? "Choose guests"
            : `${adulitCount} adult - ${childCount} child - ${roomCount} room`}
        </span>
        {isOpenGuest ? <FaChevronUp /> : <FaChevronDown />}
        {isOpenGuest && (
          <div ref={guestRef} className={css["guest-counts"]}>
            <div className={css.count}>
              <div>
                <span>Adults</span>
              </div>
              <div className={css.clickBtn}>
                <button
                  onClick={() =>
                    setAdulitCount(adulitCount > 0 ? adulitCount - 1 : 0)
                  }
                >
                  -
                </button>
                {adulitCount}
                <button onClick={() => setAdulitCount(adulitCount + 1)}>
                  +
                </button>
              </div>
            </div>

            <div className={css.count}>
              <div>
                <span>Children</span>
              </div>
              <div className={css.clickBtn}>
                <button
                  onClick={() =>
                    setChildCount(childCount > 0 ? childCount - 1 : 0)
                  }
                >
                  -
                </button>
                {childCount}
                <button onClick={() => setChildCount(childCount + 1)}>+</button>
              </div>
            </div>

            <div className={css.count}>
              <div>
                <span>Rooms</span>
              </div>
              <div className={css.clickBtn}>
                <button
                  onClick={() =>
                    setRoomCount(roomCount > 0 ? roomCount - 1 : 0)
                  }
                >
                  -
                </button>
                {roomCount}
                <button onClick={() => setRoomCount(roomCount + 1)}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestInputComponent;
