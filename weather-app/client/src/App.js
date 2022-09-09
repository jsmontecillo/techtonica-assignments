import Weather from './components/weather'
import './App.css';
import dog from './dog.png';
import speech from './speech.png';


function App() {
  return (
    <div className="App">
      <h1>weather</h1>
      <img src={dog} alt="this is fine dog meme" style={{position: "absolute", marginTop: "200px", marginLeft: "-250px"}}/>
      <img src={speech} alt="speech bubble" style={{position: "relative", width: "500px", zIndex: "-1"}}/>
      <Weather />
    </div>
  );
}

export default App;
