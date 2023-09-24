import React from "react";
import styles from "./footer.module.css";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import paypal from "../../assests/paypal.png";
import visa from "../../assests/visa.png";
import visa2 from "../../assests/visa2.jpg";
import phonepe from "../../assests/phonepe.png";

const Footer = () => {
  return (
    <section className={styles.footerBlock}>
      <article className={styles.article1}>
        <div id="div01" className={styles.div01}>
          <div className={styles.div1}>
            <h2>Sign Up To Our News Letter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className={styles.div2}>
            <input id="inp" type="text" placeholder="your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div id="div02" className={styles.div02}>
          <ul>
            <p className={styles.add}>Information</p>
            <li>Address</li>
            <li>About us</li>
            <li>About zip</li>
            <li>Privercy policy</li>
            <li>search</li>
            <li>Terms</li>
            <li>Order</li>
            <li>Contact us</li>
          </ul>
          <ul id="ul">
            <p className={styles.add}>Information</p>
            <li>Information</li>
            <li>About us</li>
            <li>About zip</li>
            <li>Privercy policy</li>
            <li>search</li>
            <li>Terms</li>
            <li>Order</li>
            <li>Contact us</li>
          </ul>
          <ul id="ul">
            <p className={styles.add}>Information</p>
            <li>Information</li>
            <li>About us</li>
            <li>About zip</li>
            <li>Privercy policy</li>
            <li>search</li>
            <li>Terms</li>
            <li>Order</li>
            <li>Contact us</li>
          </ul>
          <ul id="ul">
            <p className={styles.add}>Information</p>
            <li>Information</li>
            <li>About us</li>
            <li>About zip</li>
            <li>Privercy policy</li>
            <li>search</li>
            <li>Terms</li>
            <li>Order</li>
            <li>Contact us</li>
          </ul>
          <ul id="ul">
            <p className={styles.add}>Information</p>
            <li>Information</li>
            <li>About us</li>
            <li>About zip</li>
            <li>Privercy policy</li>
            <li>search</li>
            <li>Terms</li>
            <li>Order</li>
            <li>Contact us</li>
          </ul>
        </div>
      </article>
      <article className={styles.article2}>
        <div className={styles.div1}>
          <span>
            <ImFacebook2 />
          </span>
          <span style={{ fontSize: "18px" }}>
            <AiFillInstagram />
          </span>
        </div>
        <div id="img" className={styles.div2}>
          <img height="20px" src={paypal} alt="" />
          <img height="20px" src={visa} alt="" />
          <img height="20px" src={visa2} alt="" />
          <img height="20px" src={phonepe} alt="" />
        </div>
        <div className={styles.div3}>Copy @ 2020 shop pvt ltd</div>
      </article>
      <div id="extimg" className={styles.div2}>
        <img height="20px" src={paypal} alt="" />
        <img height="20px" src={visa} alt="" />
        <img height="20px" src={visa2} alt="" />
        <img height="20px" src={phonepe} alt="" />
      </div>
    </section>
  );
};

export default Footer;
