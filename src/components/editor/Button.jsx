function Button({ label, onClick, logo = false }) {
  return (
    <button className="btn" onClick={onClick}>
      {!logo ? label : <img src={label}></img>}
    </button>
  );
}

export default Button;
