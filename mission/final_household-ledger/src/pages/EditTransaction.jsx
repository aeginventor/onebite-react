import { useParams } from "react-router-dom";
import TransactionEditor from "../components/TransactionEditor";
import useTransaction from "../hooks/useTransaction";

const EditTransaction = () => {
  const params = useParams();
  const initData = useTransaction(params.id);

  return (
    <div>
      <h1>기록 수정하기</h1>
      <TransactionEditor type="EDIT" initData={initData} />
    </div>
  );
};

export default EditTransaction;
