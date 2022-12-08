import { getExpenseItems } from "./util";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import logo from "./resources/logo.svg";
import "./App.css";

function App() {
  const expenses = getExpenseItems();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MY React APP</h1>
      </header>

      <NewExpense/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
