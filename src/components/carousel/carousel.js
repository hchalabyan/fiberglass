import React from "react";
import classes from "./carousel.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import NavIcon from "../iconsSVG/navIcon";

const handleDragStart = (e) => e.preventDefault();
const items = [
  <div className={classes.CarouselItem}>
    <img
      src={img6}
      onDragStart={handleDragStart}
      role="presentation"
      alt="img 1"
    />
    <p>Abrasives</p>
  </div>,
  <div className={classes.CarouselItem}>
    <img
      src={img1}
      onDragStart={handleDragStart}
      role="presentation"
      alt="img 2"
    />
    <p>Electrical</p>
  </div>,
  <div className={classes.CarouselItem}>
    <img
      src={img2}
      onDragStart={handleDragStart}
      role="presentation"
      alt="img 3"
    />
    <p>Welding</p>
  </div>,
  <div className={classes.CarouselItem}>
    <img
      src={img3}
      onDragStart={handleDragStart}
      role="presentation"
      alt="img 3"
    />
    <p>Safety</p>
  </div>,
  <div className={classes.CarouselItem}>
    <img
      src={img4}
      onDragStart={handleDragStart}
      role="presentation"
      alt="img 3"
    />
    <p>Fasteners</p>
  </div>,
  <div className={classes.CarouselItem}>
    <img
      src={img5}
      onDragStart={handleDragStart}
      role="presentation"
      alt="img 3"
    />
    <p>Hand Tools</p>
  </div>,
];
const responsive = {
  0: { items: 2 },
  480: { items: 3 },
  568: { items: 4 },
  1024: { items: 5, itemsFit: "contain" },
  1200: { items: 5, itemsFit: "contain" },
  1600: { items: 6, itemsFit: "contain" },
};
const Carousel = () => {
  return (
    <>
      <div className={classes.Categories}>
        <p>Categories</p>
        <button>
          Live Chat <NavIcon width="1.6rem" height="1.75rem" />
        </button>
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        paddingLeft="2.6rem"
      />
    </>
  );
};
export default Carousel;
