import { useContext } from "react";
import { TransactionStateContext } from "../App.jsx";
import TransactionItem from "./TransactionItem";

const getSortedTransaction = (data) => {
  return data.toSorted((a, b) => Number(b.date) - Number(a.date));
};

const TransactionList = () => {
  const data = useContext(TransactionStateContext);
  const sortedTransaction = getSortedTransaction(data);

  return (
    <div>
      {sortedTransaction.map((item) => (
        <TransactionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TransactionList;
