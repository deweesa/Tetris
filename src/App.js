import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage.js';
import {useState} from 'react';



function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function sayClicked() {
    alert('You clicked me');
  }

  function playClicked() {
    setIsPlaying(true);
  }

  let inner = isPlaying? <p>playing</p> : <LandingPage onClick={playClicked}/>
  return (
    <div className="App">
      {inner}
    </div>
  );
}

export default App;
