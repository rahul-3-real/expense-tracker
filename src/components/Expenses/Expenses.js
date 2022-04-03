import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenses = [
    {
      id: "e1",
      title: "Card Insurance",
      amount: 300,
      date: new Date(2022, 3, 31),
    },
    {
      id: "e2",
      title: "Groceries",
      amount: 100,
      date: new Date(2022, 3, 31),
    },
    {
      id: "e3",
      title: "Travelling Expenses",
      amount: 200,
      date: new Date(2022, 3, 31),
    },
    {
      id: "e4",
      title: "Rent",
      amount: 100,
      date: new Date(2022, 3, 31),
    },
  ];

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <ExpenseFilter
        onFilterChange={filterChangeHandler}
        selectedYear={filteredYear}
      />
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </Card>
    </>
  );
};

export default Expenses;
