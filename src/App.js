import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Gaming Laptop",
      amount: 123790,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 3594.67,
      date: new Date(2021, 4, 28),
    },
    {
      id: "e4",
      title: "Wooden Desk",
      amount: 9675.23,
      date: new Date(2021, 5, 19),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("Inside App.js: " + expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
