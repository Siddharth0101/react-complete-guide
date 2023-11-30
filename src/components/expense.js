import "./expense.css";
import expensedate from "./expensedate";
function Expense(props) {
  return (
    <div className="expense-item">
      <expensedate date={props.date} />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
    </div>
  );
}
export default Expense;
