import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((value, item) => {
    return value + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={classes["button"]}>
      <span className={classes["icon"]}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
