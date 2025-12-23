import useInput from "./../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input onChange={onChange} value={input} />
    </div>
  );
};

export default HookExam;

// 3가지 hook 관련 주의사항
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다. (조건문, 반복문 내에서 호출 불가)
// 3. 커스텀 훅을 직접 만들 수 있다.
