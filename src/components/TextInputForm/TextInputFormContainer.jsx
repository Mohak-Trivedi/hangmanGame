function TextInputFormContainer() {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <TextInputForm
      handleTextInputChange={handleTextInputChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
}

export default TextInputFormContainer;
