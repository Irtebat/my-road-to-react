import Expenses from "./components/Expenses/Expenses";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const expenses = [
    { id: 1, title: "House Rent", amount: 14999, date: new Date(2021, 7, 2) },
    { id: 2, title: "Car Insurance", amount: 5000, date: new Date(2021, 7, 4) },
    { id: 3, title: "Utilities", amount: 7899, date: new Date(2021, 6, 28) },
  ];
  return (
    <div className="container-fluid">
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
