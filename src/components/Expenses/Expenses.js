import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <ExpenseFilter
        onFilterChange={filterChangeHandler}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <Card className="expenses">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
