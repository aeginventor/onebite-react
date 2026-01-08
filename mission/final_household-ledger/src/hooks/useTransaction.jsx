import { useContext, useState, useEffect } from "react";
import { TransactionStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useTransaction = (id) => {
  const data = useContext(TransactionStateContext);
  const [curTransactionItem, setCurTransactionItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const curTransactionItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!curTransactionItem) {
      window.alert("존재하지 않는 거래 기록입니다.");
      nav("/", { replace: true });
    }

    setCurTransactionItem(curTransactionItem);
  }, [id, data]);

  return curTransactionItem;
};

export default useTransaction;
