import "./NewTransaction.css";
import TransactionEditor from "../components/TransactionEditor";

const NewTransaction = () => {
  return (
    <div className="NewTransaction">
      <header>
        <h1>새로운 기록</h1>
      </header>
      <TransactionEditor type="NEW" />
    </div>
  );
};

export default NewTransaction;
