import React from "react";
import styles from "./_navbar.module.css";
import Auth from "./Auth";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div id="topNav" className={styles.navbarBlock}>
        <Logo />
        <Menu />
        <Auth />
      </div>
    </div>
  );
};

export default Navbar;
