import { useState } from "react";

import Expenses from "./components/ViewExpenses/Expenses";
import ExpenseAdder from "./components/CreateExpense/ExpenseAdder";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Gaming Laptop",
    amount: 123790,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e3",
    title: "Wooden Desk",
    amount: 9675.23,
    date: new Date(2023, 5, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);

    // Functional approach (as below) using previous state is preferred.
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <ExpenseAdder onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
