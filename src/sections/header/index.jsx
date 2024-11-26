import css from "./index.module.css";
import { LuSearch } from "react-icons/lu";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { BsChevronDown } from "react-icons/bs";
import ButtonColorfull from "../../components/buttons/button_colorful";

const Header = () => {
  return (
    <div className={css.navbar}>
      <div className={css.navbar_item}>
        <div className={css.navbar_links}>
          <div className={css.logo}>GOGsky</div>
          <div className={css.navbar_link}>
            <a href="*">Home</a>
            <a href="*">Blog</a>
            <a href="*">Blog</a>
            <a href="*">Tours</a>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Header;
