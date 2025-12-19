const Welcome = ({ name, isMember }) => {
  if (isMember) {
    return <h1>{name}님 다시 오셨군요</h1>;
  } else {
    return <h1>{name}님 가입하시겠어요?</h1>;
  }
};

export default Welcome;
