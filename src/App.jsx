import "./App.css";
import Button from "./components/Button/Button";

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
    </div>
  );
}

export default App;
