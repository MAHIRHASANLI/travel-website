import React from "react";
import css from "./index.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footerSection}>
          <div className={css.logo}>
            <h2>LOGO</h2>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/tours">Tours</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Log in</a>
            </li>
          </ul>
        </div>

        <div className={css.footerSection}>
          <p>Your Adventure Travel Expert in 'LOGO'</p>
          <p>Location: Placeholder text</p>
          <p>Check-in - Check-out: 11/28/2024 - 11/28/2024</p>
          <p>Guest: Choose guests</p>
          <button className={css.searchButton}>Search</button>
        </div>

        <div className={css.footerSection}>
          <h3>POPULAR TOURS</h3>
          <ul>
            <li>Turkey: $700 - $450</li>
            <li>Saudi Arabia: $900 - $750</li>
            <li>UAE: $850 - $600</li>
            <li>Italy: $900 - $550</li>
            <li>Egypt: $1100 - $850</li>
          </ul>
        </div>
      </div>

      <div className={css.footerBottom}>
        <p>© 2024 Travel Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
