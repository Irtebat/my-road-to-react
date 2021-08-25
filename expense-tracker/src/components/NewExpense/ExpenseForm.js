import React, { useState } from "react";

import style from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...userInput, enteredTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...userInput, enteredAmount: parseInt(e.target.value) };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...userInput, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredExpenseData = {
      title: userInput["enteredTitle"],
      amount: userInput["enteredAmount"],
      date: new Date(userInput["enteredDate"]),
    };

    props.onSaveExpenseData(enteredExpenseData);
    props.onCancelEdit();
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  const cancelEditHandler = (e) => {
    e.preventDefault();
    props.onCancelEdit();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={style["new-expense__controls"]}>
        <div className={style["new-expense__control"]}>
          <label>Title</label>
          <input
            type="text"
            value={userInput["enteredTitle"]}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={style["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            value={userInput["enteredAmount"]}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={style["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            min="2020-1-1"
            max="2022-12-31"
            value={userInput["enteredDate"]}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div class={style["new-expense__button"]}>
        <button type="submit">Submit</button>
        <button onClick={cancelEditHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
