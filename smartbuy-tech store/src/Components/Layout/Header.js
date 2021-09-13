import React, { useEffect } from "react";

import classes from "./Header.module.css";
import smartbuyImage from "../../Assets/smartbuy.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes["header"]}>
        <h1>SmartBuy</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={smartbuyImage}
          alt="Smart buy - One stop stop for the virtual you"
        ></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
