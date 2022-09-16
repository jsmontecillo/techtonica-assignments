import './App.css';
import QuestionGrid from "./components/questiongrid";
import open from "./open.png";
import kiss from "./kiss.png";
import coke from "./coke.png";

function App() {

  return (
    <div className="test">
      <img src={open} alt="neon open sign" style={{width: "160px", position: "absolute", zIndex: 5, marginLeft: "-230px", marginTop: "-15px"}}/>
      <div className="center-card">
      <h1>Trivia Quiz</h1>
      <QuestionGrid />
      <img src={coke} alt="coca cola bottle" style={{width: "160px", position: "fixed", zIndex: 5, marginLeft: "80px", marginTop: "150px", bottom: -50, right: -80}}/>
      </div>
    </div>
  );
}

export default App;
