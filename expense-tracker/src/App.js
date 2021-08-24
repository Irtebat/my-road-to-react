import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "House Rent", amount: 14999, date: new Date(2019, 7, 2) },
    { id: 2, title: "Car Insurance", amount: 5000, date: new Date(2021, 7, 4) },
    { id: 3, title: "Utilities", amount: 7899, date: new Date(2020, 6, 28) },
    { id: 4, title: "Personal", amount: 5900, date: new Date(2019, 6, 28) },
  ]);
  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, enteredExpenseData];
    });
  };
  const deleteExpenseItemHandler = (expenseItemID) => {
    const newExpenses = [...expenses];
    // eslint-disable-next-line
    setExpenses(newExpenses.filter((expense) => expense.id != expenseItemID));
  };
  return (
    <div className="container-fluid">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDelete={deleteExpenseItemHandler}></Expenses>
    </div>
  );
};

export default App;
