import React from "react";

import style from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.refValue > 0) {
    barFillHeight = Math.round((props.value / props.refValue) * 100) + "%";
  }
  return (
    <div className={style["chart-bar"]}>
      <div className={style["chart-bar__inner"]}>
        <div
          className={style["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={style["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
