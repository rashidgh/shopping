import React from "react";
import Logoo from "../../assests/logo-removebg-preview.png";
import styles from "./_navbar.module.css";
import { MdOutlineMenu } from "react-icons/md";
const Logo = () => {
  return (
    <section className={styles.logoBlock}>
      <article>
        <div>
          <img id="logo" src={Logoo} alt="logo" />
          <span id="menu"><MdOutlineMenu /></span>
        </div>
      </article>
    </section>
  );
};

export default Logo;
