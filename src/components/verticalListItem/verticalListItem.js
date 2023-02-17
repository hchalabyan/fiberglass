import React from "react";

import classes from "./verticalListItem.module.scss";

const VerticalListItem = (props) => {
  return (
    <div className={classes.VerticalListItem}>
      <h1>{props.title}</h1>
      <ul>
        {props.listItem.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ul>
    </div>
  );
};

export default VerticalListItem;
