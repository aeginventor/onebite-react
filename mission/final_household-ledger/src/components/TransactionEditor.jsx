import "./TransactionEditor.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["🍚 식비", "💧 구독", "🏠 생활", "🏢 급여", "💰 금융"];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

export default function TransactionEditor({ onSubmit }) {
  const [input, setInput] = useState({
    name: "",
    amount: 0,
    type: "",
    category: "",
    date: new Date(),
  });
  const nav = useNavigate();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "amount") value = new Number(value);
    if (name == "date") value = new Date(value);

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="TransactionEditor">
      <div>
        <div className="description">분류</div>
        <select name="type" onChange={onChangeInput}>
          <option></option>
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
          onChange={onChangeInput}
          placeholder="금액을 입력하세요"
        />
      </div>
      <div>
        <div className="description">카테고리</div>
        <select name="category" onChange={onChangeInput}>
          <option></option>
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
        <button className="submit_button" onClick={onClickSubmitButton}>
          저장
        </button>
        <button className="cancel_button" onClick={() => nav(-1)}>
          취소
        </button>
      </div>
    </div>
  );
}
