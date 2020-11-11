import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>
            <StarIcon />
          </p>
          <p>
            <StarIcon />
          </p>
          <p>
            <StarIcon />
          </p>
        </div>
      </div>

      <img src="/products/joystick__switch.jpg" alt=""></img>

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
