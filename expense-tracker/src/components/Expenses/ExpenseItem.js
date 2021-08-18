import React, { useState } from "react";

import Card from "../Wrapper/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("me");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
      <div className="expense-item__button" onClick={clickHandler}>
        Change Title
      </div>
    </Card>
  );
};

export default ExpenseItem;
