import css from "./index.module.css";

import HeaderControls from "../../components/header/header_controls";
import DesktopLinks from "../../components/header/desktop_links";
import MobileLinks from "../../components/header/mobile_links";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={css.navbar}>
      <div className={css.navbar_item}>
        <div className={css.navbar_links}>
          <div className={css.logo}>'LOGO'</div>
          <DesktopLinks />
        </div>
        <HeaderControls />
        <MobileLinks isOpen={isOpen} />
        <div className={css.isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
