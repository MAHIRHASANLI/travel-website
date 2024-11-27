import React from "react";

import { LuSearch } from "react-icons/lu";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { BsChevronDown } from "react-icons/bs";
import css from "./index.module.css";
import ButtonColorfull from "../../buttons/button_colorful";

const HeaderControls = () => {
  return (
    <div className={css.navbar_searchAndButtons}>
      <div className={css.search}>
        <div>
          <LuSearch />
        </div>

        <div className={css.flag}>
          <LiaFlagUsaSolid />
          <BsChevronDown />
        </div>
      </div>

      <div className={css.buttons}>
        <button>Sign Up</button>
        <ButtonColorfull>Log in</ButtonColorfull>
      </div>
    </div>
  );
};

export default HeaderControls;
