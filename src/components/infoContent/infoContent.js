import React from "react";
import classes from "./infoContent.module.scss";
import BackgroundContent from "../backgroundContent/backgroundContent";

const InfoContent = () => {
  return (
    <div className={classes.InfoContent}>
      <BackgroundContent
        title="Large Inventory Of Power Tools & Accessories"
        content=" Find the Aluminum and Stainless Steel items for your project in stock
        and ready to ship today! Avoid project delays and long lead times in a
        challenging supply chain for specialty metals and non-ferrous items. We
        are well stocked and here to serve you with guided support."
        text="Shop Now"
      />
    </div>
  );
};
export default InfoContent;
