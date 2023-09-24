import React from "react";
import styles from "./_navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiUserCircleFill } from "react-icons/pi";
const Auth = () => {
  return (
    <section id="auth" className={styles.authBlock}>
      <div>
        <span id="searchBar" className={styles.searchBar}>
          <FiSearch />
        </span>
        <span id="cart" className={styles.cart}>
          <AiOutlineShoppingCart />
          <span>2</span>
        </span>
        <img id="userPic"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU"
          alt="Login"
        />
        <span id="user"><PiUserCircleFill/></span>
      </div>
    </section>
  );
};

export default Auth;
