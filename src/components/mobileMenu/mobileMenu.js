import React, { Fragment, useState } from "react";

import classes from "./mobileMenu.module.scss";
import IconHamburger from "../iconsSVG/humburgerIcon";
import CloseIcon from "../iconsSVG/closeIcon";
import LogoIcon from "../iconsSVG/logoIcon";

const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandelClick = () => {
    setIsOpen(true);
  };
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const closeModalHandleClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={classes.HamburgerIconWrapper}
        onClick={openModalHandelClick}
      >
        <IconHamburger />
      </div>
      <div
        onClick={closeModalHandleClick}
        className={`${classes.Backdrop} ${
          isOpen ? classes.Open : classes.Close
        }`}
      />

      <div
        className={`${classes.MobileMenu} ${
          isOpen ? classes.Open : classes.Close
        }`}
      >
        <div className={classes.MobileHeaderWrapper}>
          <div className={classes.LogoWrapper}>
            <LogoIcon />
          </div>
          <div
            onClick={closeModalHandleClick}
            className={classes.CloseIconWrapper}
          >
            <CloseIcon />
          </div>
        </div>
        <hr />
        <div className={classes.MobileMenuElement}>
          <ul>
            {props.menuItem.map((item) => {
              return (
                <Fragment key={item.id}>
                  <div>
                    <li>{item.item}</li>
                  </div>
                  <hr />
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
