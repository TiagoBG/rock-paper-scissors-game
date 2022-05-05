import "./styles/App.css";
import GameScenario from "./components/GameScenario/GameScenario";
import InstructionsCard from "./components/InstructionsCard/InstructionsCard";
import Tester from "./components/test";
import GameImg from "./assets/images/game-img.jpeg";

function App() {
  return (
    <div className="App">
      <div className="instructions-card">
        <div className="front">
          <h1>Welcome to rock, paper, scissors</h1>
          <img
            src={GameImg}
            alt="rock-paper-scissors"
            style={{ maxWidth: "80%", marginTop: "8%" }}
          />
          <h3 style={{ marginTop: "15%" }}>Flip to see the instructions</h3>
        </div>
        <div className="back">
          <h2>Instructions</h2>
          <h4>1. Select the option you play</h4>
        </div>
      </div>
      <Tester />
    </div>
  );
}

export default App;
