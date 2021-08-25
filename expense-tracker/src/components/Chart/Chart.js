import React from "react";

import ChartBar from "./ChartBar";

import style from "./Chart.module.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const refValue = dataPointValues.reduce((a, b) => a + b);
  return (
    <div className={style["chart"]}>
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            refValue={refValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
