import Expense from "./components/expense";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 100,
      date: new Date(2023, 12),
    },
    {
      id: "e2",
      title: "TV",
      amount: 500,
      date: new Date(2023, 11),
    },
  ];
  return (
    <div>
      <h2>lets get started</h2>
      <Expense
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Expense>
      <Expense
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></Expense>
    </div>
  );
}

export default App;
