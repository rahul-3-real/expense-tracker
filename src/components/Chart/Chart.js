import React from "react";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <>
      <Card className="chart">
        {props.dataPoints.map((data) => (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={totalMaximum}
            label={data.label}
          />
        ))}
      </Card>
    </>
  );
};

export default Chart;
