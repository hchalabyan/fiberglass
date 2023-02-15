import React from "react";
import classes from "./menuElementWithIcon.module.scss";

const MenuElementWithIcon = (props) => {
  return (
    <div className={classes.MenuElementWithIcon}>
      <div className={classes.IconWithBudget}>
        <div
          className={classes.IconWrapper}
          style={{ width: props.width, height: props.height }}
        >
          {props.icon}
        </div>
        {props.isBudget ? <div className={classes.Budget}>32</div> : null}
      </div>

      <p>{props.title}</p>
    </div>
  );
};

export default MenuElementWithIcon;
