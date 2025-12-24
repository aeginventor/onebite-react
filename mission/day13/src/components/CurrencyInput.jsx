const CurrencyInput = ({ name, input, onChange }) => {
  return (
    <div>
      <label>{name}:</label>
      <input
        type="number"
        value={input[name]}
        onChange={(e) => {
          onChange(name, e.target.value);
        }}
      />
    </div>
  );
};

export default CurrencyInput;
