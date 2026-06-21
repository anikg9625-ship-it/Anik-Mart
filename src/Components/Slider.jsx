import React from "react";
import "./Css/slider.css";
import grocery from "../assets/images/GrocerySlider.png";
import jewellery from "../assets/images/JwellerySlider.png";
import clothes from "../assets/images/kapde.png";

const Slider = () => {
  return (
    <div className="container-fluid p-0">


      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={grocery} className="d-block w-100 slider-img" alt="" />
          </div>

          <div className="carousel-item">
            <img src={clothes} className="d-block w-100 slider-img" alt="" />
          </div>

          <div className="carousel-item">
            <img src={jewellery} className="d-block w-100 slider-img" alt="" />
          </div>

        </div>

        <button
          className="carousel-control-prev visually-hidden"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next visually-hidden"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </div>
  );
};

export default Slider;