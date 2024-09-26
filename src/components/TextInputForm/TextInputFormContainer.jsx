import TextInputForm from "./TextInputForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted", value);
    if (value) {
      navigate(`/play?text=${value}`);
    }
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
