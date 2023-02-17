import React from "react";
import classes from "./backgroundContent.module.scss";
import Button from "../button/button";

const BackgroundContent = (props) => {
  return (
    <div className={classes.BackgroundContent}>
      {props.title ? <h1>{props.title}</h1> : null}
      <p>{props.content}</p>
      <Button> {props.text}</Button>
    </div>
  );
};

export default BackgroundContent;
