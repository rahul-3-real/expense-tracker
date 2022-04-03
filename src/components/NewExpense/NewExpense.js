import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <>
      <Card className="add-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </Card>
    </>
  );
};

export default NewExpense;
