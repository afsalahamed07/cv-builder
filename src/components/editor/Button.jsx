function Button({ label, newEducation }) {
  return (
    <button className="btn" onClick={newEducation}>
      {label}
    </button>
  );
}

export default Button;
