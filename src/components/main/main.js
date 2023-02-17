import React from "react";
import classes from "./main.module.scss";
import Slider from "../slider/slider";
import Carousel from "../carousel/carousel";
import InfoContent from "../infoContent/infoContent";
import Services from "../services/services";
import Footer from "../footer/footer";

const Main = () => {
  return (
    <div className={classes.Main}>
      <Slider />
      <Carousel />
      <InfoContent />
      <Services />
      <Footer />
    </div>
  );
};

export default Main;
