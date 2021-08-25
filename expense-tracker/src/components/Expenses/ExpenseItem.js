import React from "react";

import Card from "../Wrapper/Card";
import ExpenseDate from "./ExpenseDate";

import style from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <Card className={style["expense-item"]}>
      <ExpenseDate date={props.date} />
      <div className={style["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={style["expense-item__price"]}>Rs. {props.amount}</div>
      </div>
      <div className={style["expense-item__button"]} onClick={deleteHandler}>
        Delete
      </div>
    </Card>
  );
};

export default ExpenseItem;
