import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  let inputType = "password";

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide button clicked.");

    if (inputType === "password") {
      inputType = "text";
    } else {
      inputType = "password";
    }

    console.log("Input type changed to", inputType);
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleTextInputChange={handleTextInputChange}
      handleFormSubmit={handleFormSubmit}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
