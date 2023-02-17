import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import classes from "./slider.module.scss";
import BackgroundContent from "../backgroundContent/backgroundContent";

const Slider = () => {
  return (
    <div className={classes.Slider}>
      <Carousel autoplay className="slider-wrapper" dotPosition="bottom">
        <div className={classes.Slider1}>
          <BackgroundContent
            content="Fiberglass and specialty metals are in stock across the United
            States"
            text="Shop Now"
          />
        </div>
        <div className={classes.Slider1}>
          <BackgroundContent
            content="Fiberglass and specialty metals are in stock across the United
            States"
            text="Shop Now"
          />
        </div>
        <div className={classes.Slider1}>
          <BackgroundContent
            content="Fiberglass and specialty metals are in stock across the United
            States"
            text="Shop Now"
          />
        </div>
        <div className={classes.Slider1}>
          <BackgroundContent
            content="Fiberglass and specialty metals are in stock across the United
            States"
            text="Shop Now"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Slider;
