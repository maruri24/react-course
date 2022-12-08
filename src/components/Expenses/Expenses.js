import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const items = [];

  props.expenses.forEach((item, index) => {
    items.push(
      <ExpenseItem
        key={index}
        title={item.title}
        amount={item.amount}
        currency={item.currency}
        date={item.date}
      />
    );
  });

  return <Card className="expenses">{items}</Card>;
};
export default Expenses;
