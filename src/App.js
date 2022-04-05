import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Card Insurance",
    amount: 300,
    date: new Date(2019, 3, 31),
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
    date: new Date(2021, 3, 31),
  },
  {
    id: "e4",
    title: "Rent",
    amount: 100,
    date: new Date(2022, 3, 31),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const appExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app">
      <div className="container">
        <NewExpense onAddExpense={appExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default App;
