import "./App.css";
import { useRef, useReducer } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    default:
      return state;
  }
}

const mockData = [
  {
    id: 0,
    name: "아무개",
    email: "example@gmail.com",
  },
];

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);

  const onCreate = (contents) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: contents.name,
        email: contents.email,
      },
    });
  };

  const onDelete = () => {
    dispatch();
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
