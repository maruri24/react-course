import { getExpenseItems } from "./util";
import Expenses from "./components/Expenses";
import logo from "./resources/logo.svg";
import "./styles/App.css";

function App() {
  const expenses = getExpenseItems();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MY React APP</h1>
      </header>
      
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
