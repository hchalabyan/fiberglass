import React, { useEffect, useState } from "react";
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
import MobileMenu from "../mobileMenu/mobileMenu";
import ContactInformation from "../contactInformation/contactInformation";
import DropdownMenu from "../dropdownMenu/dropdownMenu";

const Header = () => {
  const [mobile, setIsMobile] = useState(false);
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
      width: `${mobile ? "2.5rem" : "1.5rem"}`,
      height: `${mobile ? " 2.8rem" : "1.8rem"}`,
    },
    {
      id: 1,
      icon: <UserIcon />,
      title: "Account",
      isBudget: false,
      width: `${mobile ? "2.9rem" : "1.9rem"}`,
      height: `${mobile ? "2.9rem" : "1.9rem"}`,
    },
    {
      id: 2,
      icon: <VectorIcon />,
      title: "Quick Order",
      isBudget: false,
      width: `${mobile ? "2.1rem" : "1.1rem"}`,
      height: `${mobile ? "2.7rem" : "1.7rem"}`,
    },
    {
      id: 3,
      icon: <CartIcon />,
      title: "Cart",
      isBudget: true,
      width: `${mobile ? "2.9rem" : "1.9rem"}`,
      height: `${mobile ? "2.9rem" : "1.9rem"}`,
    },
  ];
  const handResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else if (window.innerWidth > 992) {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handResize);
    return () => {
      window.removeEventListener("resize", handResize);
    };
  });
  return (
    <div className={classes.Header}>
      <div className={classes.LeftSide}>
        {!mobile ? (
          <>
            <div className={classes.LogoWithSearch}>
              <div className={classes.LogoWrapper}>
                <Link to="/">
                  <LogoIcon />
                </Link>
              </div>
              <div className={classes.SearchBox}>
                <input type="text" placeholder="Product SKU, Name???" />
                <div className={classes.SearchIconWrapper}>
                  <SearchIcon />
                </div>
              </div>
            </div>
            <Nav navData={navMenu} mainMenu />
          </>
        ) : (
          <MobileMenu menuItem={navMenu} />
        )}
      </div>
      <div className={classes.RightSide}>
        <Nav navData={navInfo} />
        {!mobile ? (
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
        ) : null}
        <div className={classes.UserMobileMenu}>
          <ContactInformation header />
          {mobile ? (
            <DropdownMenu>
              <div className={classes.MobileUserMenu}>
                {userInfo.map((elem) => {
                  return (
                    <MenuElementWithIcon
                      key={elem.id}
                      icon={elem.icon}
                      title={elem.title}
                      isBudget={elem.isBudget}
                      width={elem.width}
                      height={elem.height}
                      mobile
                    />
                  );
                })}
              </div>
            </DropdownMenu>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
