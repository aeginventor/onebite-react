import "./TransactionEditor.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TransactionDispatchContext } from "../App";
import { getStringedDate } from "../util/get-stringed-date";

const categories = ["🍚 식비", "💧 구독", "🏠 생활", "🏢 급여", "💰 금융"];

export default function TransactionEditor({ type, initData }) {
  const [input, setInput] = useState({
    name: "",
    amount: 0,
    type: "expense",
    category: categories[0],
    date: new Date(),
  });
  const { onCreateTransaction, onUpdateTransaction } = useContext(
    TransactionDispatchContext
  );
  const nav = useNavigate();

  useEffect(() => {
    if (type === "EDIT" && initData) {
      setInput({
        ...initData,
        date: new Date(initData.date),
      });
    }
  }, [type, initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "amount") value = Number(value);
    if (name == "date") value = new Date(value);

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (!input.name || !input.amount || !input.type || !input.category) {
      return;
    }
    if (type === "NEW") {
      onCreateTransaction(
        input.name,
        input.amount,
        input.type,
        input.category,
        input.date.getTime()
      );
    }

    if (type === "EDIT") {
      if (window.confirm("거래 기록을 수정하시겠습니까?")) {
        onUpdateTransaction(
          initData.id,
          input.name,
          input.amount,
          input.type,
          input.category,
          input.date.getTime()
        );
      } else {
        return;
      }
    }

    nav("/", { replace: true });
  };

  return (
    <div className="TransactionEditor">
      <div>
        <div className="description">분류</div>
        <select name="type" value={input.type} onChange={onChangeInput}>
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </div>
      <div>
        <div className="description">지출/수입 이름</div>
        <input
          type="text"
          id="name"
          name="name"
          value={input.name}
          onChange={onChangeInput}
          placeholder="지출 & 수입 이름을 입력하세요 ..."
        />
      </div>
      <div>
        <div className="description">지출/수입 금액</div>
        <input
          type="number"
          id="amount"
          name="amount"
          value={input.amount}
          onChange={onChangeInput}
          placeholder="금액을 입력하세요"
        />
      </div>
      <div>
        <div className="description">카테고리</div>
        <select name="category" value={input.category} onChange={onChangeInput}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="description">날짜</div>
        <input
          type="date"
          id="date"
          name="date"
          value={getStringedDate(input.date)}
          onChange={onChangeInput}
        />
      </div>
      <div className="button_container">
        <button className="submit_button" onClick={onSubmit}>
          저장
        </button>
        <button className="cancel_button" onClick={() => nav(-1)}>
          취소
        </button>
      </div>
    </div>
  );
}
