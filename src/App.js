import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage.js';
import Game from './Game.js';
import {useState} from 'react';



function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function sayClicked() {
    alert('You clicked me');
  }

  function playClicked() {
    setIsPlaying(!isPlaying);
  }

  let inner = isPlaying? <Game onClick={playClicked}/> : <LandingPage onClick={playClicked}/>
  return (
    <div className="App">
      {inner}
    </div>
  );
}

export default App;
