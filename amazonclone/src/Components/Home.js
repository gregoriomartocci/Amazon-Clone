import React from "react";
import "../Components/Home.css";
import Product from "../Components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/banners/banner__1.jpg" alt="" />

        <div className="home__row">
          <Product
            title="Joystick Nintendo Wii"
            price={29.99}
            image="/products/product_1.jpg"
            rating={5}
          />
          <Product
            title="Webcam with Microphone, 1080P HD Streaming USB Computer Webcam [Plug and Play] [30fps] for PC Video"
            price={34.99}
            image="/products/product_2.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM)"
            price={53.99}
            image="/products/product_3.jpg"
            rating={5}
          />
          <Product
            title="TP-Link AC1750 Smart WiFi Router (Archer A7) "
            price={53.99}
            image="/products/product_4.jpg"
            rating={4}
          />
          <Product
            title="
            AMD Ryzen 5 3600 6-Core, 12-Thread"
            price={53.99}
            image="/products/product_6.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
        <Product
            title="
            PlayStation 4 Pro 1TB Console"
            price={310.00}
            image="/products/product_7.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
