import "../styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount.toLocaleString()} {props.currency}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
