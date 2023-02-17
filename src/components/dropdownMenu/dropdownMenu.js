import React, { useState } from "react";

import classes from "./dropdownMenu.module.scss";
import UserIcon from "../iconsSVG/userIcon";
import ArrowDownIcon from "../iconsSVG/arrowDownIcon";

const DropdownMenu = (props) => {
  const [openMenu, setIsOpenMenu] = useState(false);

  const openDropdownMenuHandler = () => {
    if (!openMenu) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  };
  return (
    <div className={classes.DropdownMenu}>
      <div
        className={classes.UserIconWrapper}
        onClick={openDropdownMenuHandler}
      >
        <UserIcon color="#4859F0" pathColor="white" />
        <ArrowDownIcon color="#4859F0" />
      </div>
      {openMenu ? (
        <div className={classes.MenuList}>{props.children}</div>
      ) : null}
    </div>
  );
};
export default DropdownMenu;
