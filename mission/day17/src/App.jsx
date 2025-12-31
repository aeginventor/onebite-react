import "./App.css";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
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

export const stateContext = createContext();
export const dispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);

  const onCreate = useCallback((contents) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: contents.name,
        email: contents.email,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onDelete,
    };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <stateContext.Provider value={contacts}>
        <dispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </dispatchContext.Provider>
      </stateContext.Provider>
    </div>
  );
}

export default App;
