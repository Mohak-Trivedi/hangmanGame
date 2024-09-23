import "./App.css";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";

function App() {
  return (
    <div>
      <Button text="Click Me!" onClickHandler={() => console.log("Click Me")} />
      <Button
        text="Click Me 2!"
        styleType="error"
        onClickHandler={() => console.log("Click Me 2")}
      />
      <Button
        text="Click Me 3!"
        styleType="success"
        onClickHandler={() => console.log("Click Me 3")}
      />
      <TextInput
        label="Enter some text"
        placeholder="Enter some text here"
        onChangeHandler={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
