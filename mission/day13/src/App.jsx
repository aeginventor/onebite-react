import "./App.css";
import { useState } from "react";
import CurrencyInput from "./components/CurrencyInput";

function App() {
  const [input, setInput] = useState({
    krw: 0,
    usd: 0,
  });

  const rate = 1450;

  const onChange = (name, value) => {
    if (name === "krw") {
      setInput({ krw: value, usd: value * rate });
    }
    if (name === "usd") {
      setInput({ krw: value / rate, usd: value });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput name={"krw"} input={input} onChange={onChange} />
      <CurrencyInput name={"usd"} input={input} onChange={onChange} />
    </>
  );
}

export default App;
