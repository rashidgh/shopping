import React from "react";
import styles from "./_navbar.module.css";
import { FiSearch } from "react-icons/fi";

const Menu = () => {
  return (
    <section id="menuBlock" className={styles.menuBlock}>
      <ul>
        <div className={styles.home} >
          <li>Laptops</li>
        </div>
        <div className={styles.gallery}>
          <li>Desktop PCs</li>
        </div>
        <div className={styles.shop}>
          <li>Networking Device</li>
        </div>
        <div className={styles.contact}>
          <li>Printers & Scanners</li>
        </div>
        <div className={styles.contact}>
          <li>Pc Parts</li>
        </div>
        <div className={styles.contact}>
          <li>All Other Products</li>
        </div>
        <div className={styles.contact}>
          <li>Repairs</li>
        </div>
        <div className={styles.Details}>
          <li>Our Details</li>
        </div>
      </ul>
      <div id="search" className={styles.searh}>
        <span className={styles.searhLogo}>
          <FiSearch />
        </span>
        <input type="text" placeholder="search here" />
      </div>
    </section>
  );
};

export default Menu;
