import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

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
      <div className="new-expense d-flex justify-content-center">
        <button onClick={editHandler}>Add new Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveEnteredExpenseDataHandler}
          onCancelEdit={stopEditHandler}
        />
      </div>
    );
  }
};

export default NewExpense;
