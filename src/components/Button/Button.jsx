function Button({ text, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      style={{ backgroundColor: "blue", color: "white" }}
    >
      {text}
    </button>
  );
}

export default Button;
