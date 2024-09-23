function Button({ text, onClickHandler }) {
  return (
    <button onClick={onClickHandler} className="text-white bg-blue-500">
      {text}
    </button>
  );
}

export default Button;
