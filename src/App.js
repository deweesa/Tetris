import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Tetris! </h1>
      <div className="Buttons">
        <button onClick={sayClicked}>Play</button>
        <button onClick={sayClicked}>Help</button>
      </div>
      <p>
        High Scores (implementing later)
      </p>
    </div>
  );
}

function sayClicked() {
  alert('You clicked me');
}

export default App;
