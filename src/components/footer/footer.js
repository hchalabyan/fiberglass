import React from "react";

import classes from "./footer.module.scss";
import VerticalListItem from "../verticalListItem/verticalListItem";
import ContactInformation from "../contactInformation/contactInformation";
import Button from "../button/button";
import Payment from "../../assets/payment.png";

const listItemData = [
  {
    id: 0,
    title: "Helpful Links",
    listItem: [
      { id: 0, item: "Buyer’s Guides" },
      { id: 1, item: "Calculators" },
      { id: 2, item: "All Brands" },
      { id: 3, item: "Catalg Updates" },
    ],
  },
  {
    id: 1,
    title: "Customer Services",
    listItem: [
      { id: 0, item: "Customer Services" },
      { id: 1, item: "Privacy Statement" },
      { id: 2, item: "Terms of Use" },
      { id: 3, item: "Pricing Policy" },
      { id: 4, item: "Returns and Refunds" },
      { id: 5, item: "Help and FAQ" },
      { id: 6, item: "Return Points" },
      { id: 7, item: "Returns and Orders" },
    ],
  },
  {
    id: 2,
    title: "Support",
    listItem: [
      { id: 0, item: "Contact Us" },
      { id: 1, item: "FAQ" },
      { id: 2, item: "Feedback" },
      { id: 3, item: "Live Chat" },
      { id: 4, item: "My Account" },
      { id: 5, item: <ContactInformation /> },
    ],
  },
];
const Footer = () => {
  return (
    <footer>
      <div className={classes.VerticalMenuWrapper}>
        {listItemData.map((list, index) => {
          return (
            <VerticalListItem
              listItem={list.listItem}
              title={list.title}
              key={list.id}
            />
          );
        })}
      </div>
      <div className={classes.SubscribeWrapper}>
        <h1>
          Subscribe to our mailing list to receive exclusive offers and the
          latest product updates
        </h1>
        <div className={classes.SubscribeForm}>
          <input type="text" />
          <Button>Subscribe</Button>
        </div>
        <img src={Payment} alt="" />
      </div>
      <p className={classes.CopyRight}>© «Brand» 2022, All Rights Reserved</p>
    </footer>
  );
};
export default Footer;
