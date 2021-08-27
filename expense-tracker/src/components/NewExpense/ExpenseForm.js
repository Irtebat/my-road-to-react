import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

import style from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [error, setError] = useState();
  const [invalid, setInvalid] = useState();

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
    if (
      // eslint-disable-next-line
      userInput["enteredTitle"].trim().length == 0 ||
      // eslint-disable-next-line
      userInput["enteredAmount"].trim.length == 0 ||
      // eslint-disable-next-line
      !userInput["enteredDate"]
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter non-empty values",
      });
      setInvalid(true);
      return;
    }
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div
          className={`${style["new-expense__controls"]} ${
            invalid && style["invalid"]
          }`}
        >
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
          <button onClick={props.onCancelEdit}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
