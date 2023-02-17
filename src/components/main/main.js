import React from "react";
import classes from "./main.module.scss";
import Slider from "../slider/slider";
import Carousel from "../carousel/carousel";
import InfoContent from "../infoContent/infoContent";

const Main = () => {
  return (
    <div className={classes.Main}>
      <Slider />
      <Carousel />
      <InfoContent />
    </div>
  );
};

export default Main;
