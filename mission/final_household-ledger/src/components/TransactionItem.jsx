import { useNavigate } from "react-router-dom";
import "./TransactionItem.css";
import { useContext } from "react";
import { TransactionDispatchContext } from "../App";

const TransactionItem = ({ id, name, amount, type, category, date }) => {
  const { onDeleteTransaction } = useContext(TransactionDispatchContext);
  const nav = useNavigate();

  const onClickDeleteButton = () => {
    if (window.confirm("거래 기록을 삭제하시겠습니까?")) {
      onDeleteTransaction(id);
      nav("/", { replace: true });
    } else {
      return;
    }
  };

  return (
    <div className="TransactionItem">
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div
        className={`amount ${
          type === "income" ? "amount_income" : "amount_expense"
        }`}
      >
        {type === "income" ? "+" : "-"} {Number(amount).toLocaleString("ko-KR")}
        원
      </div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <div className="button_container">
        <div
          className="edit_button"
          onClick={() => {
            nav(`/edit-transaction/${id}`);
          }}
        >
          수정
        </div>
        <div className="delete_button" onClick={onClickDeleteButton}>
          삭제
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
