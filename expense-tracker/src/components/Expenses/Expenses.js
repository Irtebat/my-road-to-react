import React, { useState, useLayoutEffect } from "react";

import Card from "../Wrapper/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [items, setItems] = useState(props.items);
  const [yearSelected, setyearSelected] = useState("NA");
  const [yearSet, setYearSet] = useState("");

  const expensesFilterHandler = (year) => {
    setyearSelected(year);
    // eslint-disable-next-line
    if (year == "NA") {
      setItems([...props.items]);
    } else {
      const itemsInProp = [...props.items];
      const filteredItems = itemsInProp.filter((itemInProp) => {
        // eslint-disable-next-line
        return itemInProp.date.getFullYear().toString() == year;
      });
      setItems(filteredItems);
    }
  };
  const yearSetHandler = () => {
    const updatedYearList = props.items.map((item) => {
      return item.date.getFullYear();
    });
    const updatedYearSet = Array.from(new Set(updatedYearList))
      .sort()
      .reverse();
    setYearSet(updatedYearSet);
  };

  useLayoutEffect(() => {
    yearSetHandler();
    setItems(props.items);
    expensesFilterHandler(yearSelected);
  }, [props.items]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={expensesFilterHandler}
        selected={yearSelected}
        yearSet={yearSet}
      />
      <ExpensesChart expenses={items} />
      <ExpensesList items={items} onDelete={props.onDelete} />
    </Card>
  );
};

export default Expenses;
