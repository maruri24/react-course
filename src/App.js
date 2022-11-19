import logo from "./resources/logo.svg";
import "./styles/App.css";

import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MY React APP</h1>
      </header>
      <ExpenseItem />
    </div>
  );
}

export default App;
