import Card from "../Card";
import "./App.css";
import "../Button/button.css";
import "../Card/style.css";

function App() {
  return (
    <div className="App">
      <Card
        title="SOC"
        text="welcome to soc"
        url="https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg"
      />
      <Card
        title="School of Code"
        text="welcome to school of code"
        url="https://pbs.twimg.com/media/FI5tl66XwAI7vYW.jpg"
      />
      <Card
        title="School of Magic"
        text="welcome to school of magic"
        url="https://www.birminghamupdates.com/wp-content/uploads/2020/07/IMG_7540-scaled-e1594894273443.jpg"
      />
    </div>
  );
}

export default App;
