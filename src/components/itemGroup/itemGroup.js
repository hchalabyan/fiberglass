import React from "react";

import classes from "./itemGroup.module.scss";

const ItemGroup = (props) => {
  return (
    <div className={classes.ItemGroup}>
      <div
        style={{ width: props.width, height: props.height }}
        className={classes.IconsWrapper}
      >
        {props.children}
      </div>
      <p>{props.title}</p>
    </div>
  );
};
export default ItemGroup;
