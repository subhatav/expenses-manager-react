import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [isCreating, setIsCreating] = useState(false);

  const showExpenseFormHandler = () => {
    setIsCreating(true);
  };
  const hideExpenseFormHandler = () => {
    setIsCreating(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const expenseFormButton = (
    <button onClick={showExpenseFormHandler}>Create New Expense</button>
  );
  const expenseFormDetails = (
    <ExpenseForm
      onCancelExpenseData={hideExpenseFormHandler}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  );

  return (
    <div className="new-expense">
      {!isCreating && expenseFormButton}
      {isCreating && expenseFormDetails}
    </div>
  );
}

export default NewExpense;
