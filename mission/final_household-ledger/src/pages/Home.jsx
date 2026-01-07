import "./Home.css";
import { useContext } from "react";
import { TransactionStateContext } from "../App";
import TransactionItem from "../components/TransactionItem";
import { useNavigate } from "react-router-dom";

const getSortedTransactions = (transactions) => {
  return transactions.toSorted((a, b) => Number(b.date) - Number(a.date));
};

const Home = () => {
  const nav = useNavigate();
  const transactions = useContext(TransactionStateContext);

  const sortedTransactions = getSortedTransactions(transactions);

  return (
    <div className="Home">
      <header>
        <h1>한입 가계부</h1>
        <div onClick={() => nav("/new-transaction")} className="new_button">
          + 작성하기
        </div>
      </header>
      <main className="transaction_list">
        {sortedTransactions.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </main>
    </div>
  );
};

export default Home;
