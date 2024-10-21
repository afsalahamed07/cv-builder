function Input({ label, value, field, setValue }) {
  return (
    <div className="input-label">
      <label>{label}</label>
      <input
        className="input"
        value={value}
        onChange={(event) => setValue(field, event.target.value)}
      />
    </div>
  );
}

export default Input;
