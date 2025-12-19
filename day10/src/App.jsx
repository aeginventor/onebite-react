const Welcome = ({ name, isMember }) => {
  return (
    <h1>
      {isMember ? `${name}님 다시 오셨군요` : `${name}님 가입하시겠어요?`}
    </h1>
  );
};

function App() {
  const UserInfo1 = {
    name: "김이박최",
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
