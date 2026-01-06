import "./TransactionItem.css";

const TransactionItem = ({ id, name, amount, type, category, date }) => {
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
        <div className="edit_button">수정</div>
        <div className="delete_button">삭제</div>
      </div>
    </div>
  );
};

export default TransactionItem;
