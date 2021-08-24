import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // eslint-disable-next-line
  if (props.length == 0) {
    return (
      <center>
        <p>No Expenses Added</p>
      </center>
    );
  }
  return (
    props.items.length > 0 &&
    props.items.map((item) => {
      return (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
          id={item.id}
          onDeleteItem={props.onDelete}
        ></ExpenseItem>
      );
    })
  );
};

export default ExpensesList;
