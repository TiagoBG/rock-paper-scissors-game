import "./styles/App.css";
import InstructionsCard from "./components/InstructionsCard/InstructionsCard";
import GameScenario from "./components/GameScenario/GameScenario";

function App() {
  return (
    <div className="App">
      <InstructionsCard/>
      <GameScenario />
    </div>
  );
}

export default App;
