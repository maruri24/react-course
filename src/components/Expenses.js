import '../styles/Expenses.css';
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    const items = [];

    props.expenses.forEach((item, index) => {
      items.push(
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          currency={item.currency}
          date={item.date}
        />
      );
    });

    return(
        <div className="expenses">{items}</div>
    )
}
export default Expenses;