import React from "react";

import classes from "./nav.module.scss";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className={classes.Nav}>
      <ul
        className={props.mainMenu ? classes.primaryStyle : classes.activeStyle}
      >
        {props.navData.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.navTo}>{item.item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
