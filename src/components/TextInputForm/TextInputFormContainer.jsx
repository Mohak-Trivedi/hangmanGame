import TextInputForm from "./TextInputForm";
import { useState } from "react";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted", value);
  }

  function handleTextInputChange(event) {
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide button clicked.");

    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
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
