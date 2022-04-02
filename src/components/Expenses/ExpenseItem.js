import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <>
      <Card className="item">
        <ExpenseDate date={props.date} />
        <div className="info">
          <h5 className="title">{props.title}</h5>
          <p className="price">${props.amount}</p>
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;
