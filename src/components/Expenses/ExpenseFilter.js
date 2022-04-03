import React from "react";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  return (
    <>
      <Card className="filter">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </Card>
    </>
  );
};

export default ExpenseFilter;
