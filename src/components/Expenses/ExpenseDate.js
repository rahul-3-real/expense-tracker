import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const date = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date">
      <h5>{date}</h5>
      <h6>{month}</h6>
      <h6>{year}</h6>
    </div>
  );
};

export default ExpenseDate;
