import React, { useState } from "react";
import Style from "./style.module.css";
import data from "../../assests/laptopdata.json";
import "./exStyle.css";
import { Pagination, Rating } from "@mui/material";
import loremText from "../../assests/lorem.json";

const MainPage = () => {
  console.log(loremText.text);
  // lorem text display
  let [totalWord, setTotalWord] = useState(false);

  // for pagination logic
  const productsPerPage = 15;

  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(data.products.length / productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate the starting and ending index for the current page to slice the data in map
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return (
    <aside className={Style.mainPageContainer}>
      <head
        className={Style.headMainBlock}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span style={{ color: "gray", fontSize: "small", width: "20%" }}>
          items {startIndex + 1}-{endIndex > 40 ? "40" : endIndex} of{" "}
          {data.products.length}
        </span>
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button className={Style.mainButtons}>
            <small style={{ color: "gray" }}>Sort By : </small> Position &nbsp;
            <svg height="0.8em" viewBox="0 0 448 512">
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>
          <button className={Style.mainButtons}>
            <small style={{ color: "gray" }}>Show : </small> 15 per page &nbsp;
            <svg height="0.8em" viewBox="0 0 448 512">
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>
          <svg width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
            />
          </svg>
          &nbsp;
          <svg width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z"
            />
          </svg>
        </div>
      </head>
      <aside className={Style.secondHead}>
        <button>
          Custom pcs <span>(24)</span> &nbsp;&nbsp;
          <svg height="1.3em" viewBox="0 0 512 512" fill="crimson">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </button>
        <button>
          hp/compaq pcs <span>(24)</span> &nbsp;&nbsp;
          <svg height="1.2em" viewBox="0 0 512 512" fill="crimson">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </button>
        <button style={{ textTransform: "capitalize" }}>Clear All</button>
      </aside>
      <div className={Style.filterForMobile}>
        <button className={Style.mainButtons1}>Filter</button>
        <button className={Style.mainButtons1}>
          <small style={{ color: "gray" }}>Sort By : </small> Position &nbsp;
          <svg height="0.8em" viewBox="0 0 448 512">
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>{" "}
      </div>

      <span
        className={Style.mobileViewQuantity}
        style={{ color: "gray", fontSize: "small", width: "20%" }}
      >
        items {startIndex + 1}-{endIndex > 40 ? "40" : endIndex} of{" "}
        {data.products.length}
      </span>
      <main className="laptop-list">
        {data.products.length < 1
          ? "Loading..."
          : data.products.slice(startIndex, endIndex).map((item, ind) => {
              return (
                <div className="laptop-card" key={ind+1}>
                  <p className="laptop-stock">
                    {item.stock > 1 ? (
                      <small>
                        <svg
                          fill="#27ae60"
                          height="0.8em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                        &nbsp; In Stock
                      </small>
                    ) : (
                      "Not Available"
                    )}
                  </p>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="laptop-image"
                  />
                  <div className="laptop-info">
                    <p className="laptop-rating">
                      {" "}
                      <Rating
                        precision={0.5}
                        size="small"
                        name="read-only"
                        value={item.rating}
                        readOnly
                      />
                      &nbsp;Reviews {Math.ceil(Math.random() * 100)}
                    </p>
                    <h3 className="laptop-title">{item.title}</h3>
                    <p className="laptop-original-price">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="laptop-discount-price">
                      $
                      {(
                        item.price *
                        (1 - item.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
      </main>
      <div
        style={{
          margin: "3% 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={pageCount}
          page={currentPage}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
      <div className={Style.sideBarDownForMobile}>
        <br />
        <h3
          style={{ textAlign: "center", margin: "15px 2px", fontSize: "1.4em" }}
        >
          Compare Products
        </h3>
        <p style={{ textAlign: "center", margin: "15px 2px" }}>
          You have no items to compare.
        </p>
        <br />
      </div>
      <div className={Style.sideBarDownForMobile}>
        <br />
        <h3
          style={{ textAlign: "center", margin: "15px 2px", fontSize: "1.3em" }}
        >
          My Wish List
        </h3>
        <p style={{ textAlign: "center", margin: "15px 6px" }}>
          You have no items in your wish list.
        </p>
        <br />
      </div>
      <div className={Style.sideBarDownForMobileImg}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleO0i-QAFKw_OaIEwp51wHP7bd4JNJwBr3g&usqp=CAU"
          alt=""
          width="100%"
        />
      </div>
      <p style={{ textAlign: "center", fontSize: "medium" }}>
        {loremText.text.slice(0, totalWord ? loremText.text.length : 500)}
      </p>
      <div style={{ textAlign: "center" }}>
        <button
          className={Style.loadMoreBtn}
          onClick={e => {
            setTotalWord(!totalWord);
          }}
        >
          {totalWord ? "Less" : "More"}
        </button>
      </div>
    </aside>
  );
};

export default MainPage;
