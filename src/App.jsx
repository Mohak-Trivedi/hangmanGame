import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button text="Click Me!" onClickHandler={() => console.log("Click Me")} />
    </div>
  );
}

export default App;
