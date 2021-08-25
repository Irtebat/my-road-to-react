import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import style from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [isEditingFlag, setIsEditingFlag] = useState(false);
  const saveEnteredExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { id: Math.random().toString(), ...enteredExpenseData };
    props.onAddExpense(expenseData);
  };

  const stopEditHandler = () => {
    setIsEditingFlag(false);
  };

  const editHandler = () => {
    setIsEditingFlag(true);
  };

  // eslint-disable-next-line
  if (isEditingFlag == false) {
    return (
      <div className={`${style["new-expense"]} d-flex justify-content-center`}>
        <button onClick={editHandler}>Add new Expense</button>
      </div>
    );
  } else {
    return (
      <div className={style["new-expense"]}>
        <ExpenseForm
          onSaveExpenseData={saveEnteredExpenseDataHandler}
          onCancelEdit={stopEditHandler}
        />
      </div>
    );
  }
};

export default NewExpense;
