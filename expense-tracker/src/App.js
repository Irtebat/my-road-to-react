import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: "House Rent", amount: 14999, date: new Date(2021, 7, 2) },
    { id: 2, title: "Car Insurance", amount: 5000, date: new Date(2021, 7, 4) },
    { id: 3, title: "Utilities", amount: 7899, date: new Date(2021, 6, 28) },
  ];
  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData };
    console.log(expenseData);
  };
  return (
    <div className="container-fluid">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
