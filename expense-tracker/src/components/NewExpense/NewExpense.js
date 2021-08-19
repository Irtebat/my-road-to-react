import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveEnteredExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { id: Math.random().toString(), ...enteredExpenseData };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveEnteredExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
