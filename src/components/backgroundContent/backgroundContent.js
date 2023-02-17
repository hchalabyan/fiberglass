import React from "react";
import classes from "./backgroundContent.module.scss";

const BackgroundContent = (props) => {
  return (
    <div className={classes.BackgroundContent}>
      {props.title ? <h1>{props.title}</h1> : null}
      <p>{props.content}</p>
      <button> {props.text}</button>
    </div>
  );
};

export default BackgroundContent;
