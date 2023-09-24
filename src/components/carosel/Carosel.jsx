import React from "react";
import carosel from "../../assests/asus.jpg";
import styles from "./carosel.module.css"

const Carosel = () => {
  return (
    <div id="carosel" className={styles.carosel}>
      <img src={carosel} alt="carosel" />
    </div>
  );
};

export default Carosel;
