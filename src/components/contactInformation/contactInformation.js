import React from "react";
import classes from "./contactInformation.module.scss";
import PhoneIcon from "../iconsSVG/phoneIcon";

const ContactInformation = (props) => {
  return (
    <div
      className={
        props.header
          ? classes.ContactInformation
          : `${classes.ContactInformation} ${classes.Footer}`
      }
    >
      <div className={classes.PhoneIconWrapper}>
        <PhoneIcon />
      </div>
      <span>+(844) 434-672</span>
    </div>
  );
};

export default ContactInformation;
