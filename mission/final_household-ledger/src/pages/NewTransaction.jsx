import TransactionEditor from "../components/TransactionEditor";
import { useContext } from "react";
import { TransactionDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const NewTransaction = () => {
  const { onCreateTransaction } = useContext(TransactionDispatchContext);
  const nav = useNavigate();

  const onSumbit = (input) => {
    if (
      input.name === "" ||
      input.amount === 0 ||
      input.type === "" ||
      input.category === ""
    ) {
      return;
    }

    onCreateTransaction(
      input.name,
      input.amount,
      input.type,
      input.category,
      input.date.getTime()
    );

    nav("/", { replace: true });
  };

  return (
    <div>
      <TransactionEditor onSubmit={onSumbit} />
    </div>
  );
};

export default NewTransaction;
