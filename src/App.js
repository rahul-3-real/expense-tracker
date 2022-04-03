import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const appExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="app">
      <div className="container">
        <NewExpense onAddExpense={appExpenseHandler} />
        <Expenses />
      </div>
    </div>
  );
};

export default App;
