import React from "react";
import classes from "./header.module.scss";
import Nav from "../nav/nav";
import LogoIcon from "../iconsSVG/logoIcon";
import SearchIcon from "../iconsSVG/searchIcon";
import { Link } from "react-router-dom";
import MenuElementWithIcon from "../menuElementWithIcon/menuElementWithIcon";
import DocumentIcon from "../iconsSVG/documentIcon";
import UserIcon from "../iconsSVG/userIcon";
import VectorIcon from "../iconsSVG/vectorIcon";
import CartIcon from "../iconsSVG/cartIcon";
import PhoneIcon from "../iconsSVG/phoneIcon";

const Header = () => {
  let navMenu = [
    { id: 0, item: "Products", navTo: "/products" },
    { id: 1, item: "Resources", navTo: "/resources" },
    { id: 2, item: "Services", navTo: "/services" },
    { id: 3, item: "Locations", navTo: "/locations" },
    { id: 4, item: "Careers", navTo: "/careers" },
    { id: 5, item: "Support", navTo: "/Support" },
  ];
  let navInfo = [
    { id: 0, item: "Request a Sample", navTo: "/request" },
    { id: 1, item: "Help", navTo: "/help" },
    { id: 2, item: "Contact", navTo: "/contact" },
  ];

  let userInfo = [
    {
      id: 0,
      icon: <DocumentIcon />,
      title: "Lists",
      isBudget: false,
      width: "1.5rem",
      height: "1.8rem",
    },
    {
      id: 1,
      icon: <UserIcon />,
      title: "Account",
      isBudget: false,
      width: "1.9rem",
      height: "1.9rem",
    },
    {
      id: 2,
      icon: <VectorIcon />,
      title: "Quick Order",
      isBudget: false,
      width: "1.1rem",
      height: "1.7rem",
    },
    {
      id: 3,
      icon: <CartIcon />,
      title: "Cart",
      isBudget: true,
      width: "1.9rem",
      height: "1.9rem",
    },
  ];

  return (
    <div className={classes.Header}>
      <div className={classes.LeftSide}>
        <div className={classes.LogoWithSearch}>
          <div className={classes.LogoWrapper}>
            <Link to="/">
              <LogoIcon />
            </Link>
          </div>
          <div className={classes.SearchBox}>
            <input type="text" placeholder="Product SKU, Name…" />
            <div className={classes.SearchIconWrapper}>
              <SearchIcon />
            </div>
          </div>
        </div>
        <Nav navData={navMenu} mainMenu />
      </div>
      <div className={classes.RightSide}>
        <Nav navData={navInfo} />
        <div className={classes.UserInformation}>
          {userInfo.map((elem) => {
            return (
              <MenuElementWithIcon
                key={elem.id}
                icon={elem.icon}
                title={elem.title}
                isBudget={elem.isBudget}
                width={elem.width}
                height={elem.height}
              />
            );
          })}
        </div>
        <div className={classes.ContactInformation}>
          <div className={classes.PhoneIconWrapper}>
            <PhoneIcon />
          </div>
          <span>+(844) 434-672</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
