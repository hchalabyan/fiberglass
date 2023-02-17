import React from "react";

import classes from "./services.module.scss";
import ItemGroup from "../itemGroup/itemGroup";
import CatalogIcon from "../iconsSVG/catalogIcon";
import SupportIcon from "../iconsSVG/supportIcon";
import ProductIcon from "../iconsSVG/productIcon";

const Services = () => {
  const servicesList = [
    {
      id: 0,
      children: <CatalogIcon />,
      title: "Products Catalog",
      width: "4.8rem",
      height: "4.6rem",
    },
    {
      id: 1,
      children: <SupportIcon />,
      title: "24/7 Customer Support",
      width: "4.8rem",
      height: "4.6rem",
    },
    {
      id: 2,
      children: <ProductIcon />,
      title: "24/7 Customer Support",
      width: "3.6rem",
      height: "4.75rem",
    },
  ];
  return (
    <div className={classes.Services}>
      {servicesList.map((item) => {
        return (
          <ItemGroup
            key={item.id}
            width={item.width}
            height={item.height}
            children={item.children}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
export default Services;
