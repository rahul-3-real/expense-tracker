import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }

  return (
    <div className="bar">
      <div className="inner">
        <div className="fill" style={{ height: barFillHeight }}></div>
      </div>
      <label className="label">{props.label}</label>
    </div>
  );
};

export default ChartBar;
