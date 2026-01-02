import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import NewTransaction from "./pages/NewTransaction";
import EditTransaction from "./pages/EditTransaction";
import Notfound from "./pages/Notfound";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new-transaction");
  };

  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/new-transaction"}>NewTransaction</Link>
      </div>
      <div>
        <Link to={"/edit-transaction"}>EditTranscation</Link>
      </div>
      <div>
        <button onClick={onClickButton}>NEW</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-transaction" element={<NewTransaction />} />
        <Route path="/edit-transaction/:id" element={<EditTransaction />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
