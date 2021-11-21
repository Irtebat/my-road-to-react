import React, { useContext } from "react";
import classes from "./Item.module.css";
import ItemForm from "./ItemForm";
import CartContext from "../../../Store/cart-context";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes["description"]}>{props.description}</div>
        <div className={classes["price"]}>{price}</div>
      </div>
      <div>
        <ItemForm id={props.id} onAddToCart={addToCart}></ItemForm>
      </div>
    </li>
  );
};

export default Item;
