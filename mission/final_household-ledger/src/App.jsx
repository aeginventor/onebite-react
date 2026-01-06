import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";
import EditTransaction from "./pages/EditTransaction";
import Notfound from "./pages/Notfound";
import { createContext, useReducer, useRef, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.mockData;
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) == String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) != String(action.id));
    default:
      return state;
  }
}

const mockData = [
  {
    id: 0,
    name: "마라탕 & 꿔바로우",
    amount: 59000,
    type: "expense",
    category: "🍚 식비",
    date: new Date().getTime() + 1,
  },
  {
    id: 1,
    name: "월세",
    amount: 500000,
    type: "expense",
    category: "🏠 생활",
    date: new Date().getTime() + 2,
  },
  {
    id: 2,
    name: "월급",
    amount: 3500000,
    type: "income",
    category: "🏢 급여",
    date: new Date().getTime() + 3,
  },
];

export const TransactionStateContext = createContext();
export const TransactionDispatchContext = createContext();

function App() {
  const [transactions, setTransactions] = useReducer(reducer, []);
  const idRef = useRef(3);

  const onInitTransaction = (mockData) => {
    setTransactions({
      type: "INIT",
      mockData,
    });
  };

  const onCreateTransaction = (name, amount, type, category, date) => {
    setTransactions({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        amount,
        type,
        category,
        date,
      },
    });
  };

  const onUpdateTransaction = (id, name, amount, type, category, date) => {
    setTransactions({
      type: "UPDATE",
      data: {
        id,
        name,
        amount,
        type,
        category,
        date,
      },
    });
  };

  const onDeleteTransaction = (id) => {
    setTransactions({
      type: "DELETE",
      id,
    });
  };

  useEffect(() => {
    onInitTransaction(mockData);
  }, []);

  return (
    <div>
      <TransactionStateContext.Provider value={transactions}>
        <TransactionDispatchContext.Provider
          value={{
            onCreateTransaction,
            onUpdateTransaction,
            onDeleteTransaction,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-transaction" element={<NewTransaction />} />
            <Route path="/edit-transaction/:id" element={<EditTransaction />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </TransactionDispatchContext.Provider>
      </TransactionStateContext.Provider>
    </div>
  );
}

export default App;
