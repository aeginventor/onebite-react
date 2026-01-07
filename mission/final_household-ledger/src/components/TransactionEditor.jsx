import "./TransactionEditor.css";

const categories = ["🍚 식비", "💧 구독", "🏠 생활", "🏢 급여", "💰 금융"];

export default function TransactionEditor() {
  return (
    <div className="TransactionEditor">
      <div>
        <div className="description">분류</div>
        <select>
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </div>
      <div>
        <div className="description">지출/수입 이름</div>
        <input
          type="text"
          id="name"
          placeholder="지출 & 수입 이름을 입력하세요 ..."
        />
      </div>
      <div>
        <div className="description">지출/수입 금액</div>
        <input type="number" id="amount" placeholder="금액을 입력하세요" />
      </div>
      <div>
        <div className="description">카테고리</div>
        <select>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="description">날짜</div>
        <input type="date" id="date" />
      </div>
      <div className="button_container">
        <button className="submit_button">저장</button>
        <button className="cancel_button">취소</button>
      </div>
    </div>
  );
}
