import './App.css';
import QuestionGrid from "./components/questiongrid";
import open from "./open.png";

function App() {

  return (
    <div className="test">
      <img src={open} alt="neon open sign" style={{width: "160px", position: "absolute", zIndex: 5, marginLeft: "-230px", marginTop: "-15px"}}/>
      <div className="center-card">
      <h1>Trivia Quiz</h1>
      <QuestionGrid />
      </div>
    </div>
  );
}

export default App;
