import React from "react";

import classes from "./button.module.scss";

const Button = (props) => {
  return <button className={classes.Button}>{props.children}</button>;
};
export default Button;
