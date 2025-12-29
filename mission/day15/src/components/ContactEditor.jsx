import { useReducer, useRef } from "react";
import "./ContactEditor.css";

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_EMAIL":
      return { ...state, email: action.value };
    case "RESET":
      return { name: "", email: "" };
    default:
      return state;
  }
}

export default function ContactEditor({ onCreate }) {
  const [contents, dispatch] = useReducer(reducer, { name: "", email: "" });
  const nameRef = useRef();
  const emailRef = useRef();

  const handleNameChange = (e) => {
    dispatch({
      type: "SET_NAME",
      value: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    dispatch({
      type: "SET_EMAIL",
      value: e.target.value,
    });
  };

  const handleAddContact = () => {
    if (contents.name === "") {
      nameRef.current.focus();
      return;
    } else if (contents.email === "") {
      emailRef.current.focus();
      return;
    }

    onCreate(contents);

    dispatch({
      type: "RESET",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          placeholder="이름 ..."
          onChange={handleNameChange}
          ref={nameRef}
          value={contents.name}
        />
        <input
          className="contact"
          placeholder="연락처(이메일) ..."
          onChange={handleEmailChange}
          ref={emailRef}
          value={contents.email}
        />
      </div>
      <button onClick={handleAddContact}>Add</button>
    </div>
  );
}
