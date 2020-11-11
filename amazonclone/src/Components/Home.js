import React from "react";
import "../Components/Home.css";
import Product from "../Components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/banners/banner__1.jpg" alt="" />

        <div className="home__row">
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
