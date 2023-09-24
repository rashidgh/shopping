import React from "react";
import Style from "./style.module.css";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";

const Landing = () => {
  return (
    <section id={Style.mainPageContainer}>
      <span
        className={Style.breadCrunch}
        style={{
          fontSize: "0.75em",
          marginTop: "8px",
          display: "inline-block",
          paddingLeft: "5px",
        }}
      >
        <b>{`Home > Laptops > Everyday Use Notebooks > MSi Prestige Series > MSI WS Series`}</b>{" "}
        <span>{` > MSI WS Series`}</span>
      </span>
      <h2 style={{ padding: "5px", margin: "10px 0" }}>MSI PS Series (20)</h2>
      <article>
        <Sidebar />
        <MainPage />
      </article>
    </section>
  );
};

export default Landing;
