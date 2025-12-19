import Welcome from "./components/Welcome.jsx";

function App() {
  const UserInfo1 = {
    name: "이정환",
    isMember: true,
  };

  const UserInfo2 = {
    name: "홍길동",
    isMember: false,
  };

  return (
    <>
      <Welcome {...UserInfo1} />
      <Welcome {...UserInfo2} />
    </>
  );
}

export default App;
