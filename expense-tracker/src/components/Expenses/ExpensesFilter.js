import React from "react";

import style from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const yearSelectHandler = (e) => {
    const yearSelected = e.target.value;
    props.onFilterChange(yearSelected);
  };
  return (
    <div className={style["expenses-filter"]}>
      <div className={style["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectHandler}>
          <option value="NA">No filter</option>
          {Array.from(props.yearSet).map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
