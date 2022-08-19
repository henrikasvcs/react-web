import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import nuotrauka from "../../images/image.jpg";

const Carousel = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      item="1"
      autoplay
      dots="false"
      loop
      smartSpeed="500"
    >
      <div className="item">
        <img src="https://picsum.photos/400/400" alt="ef" />
      </div>
      <div className="item">
        <img src="https://picsum.photos/400/400" alt="ef" />
      </div>
      <div className="item">
        <img src="https://picsum.photos/400/400" alt="ef" />
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
