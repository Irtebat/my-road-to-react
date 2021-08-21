import React from "react";

import Card from "../Wrapper/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
      <div className="btn btn-danger mx-2" onClick={deleteHandler}>
        Delete
      </div>
    </Card>
  );
};

export default ExpenseItem;
