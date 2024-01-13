import "./Game.css"
import Tetris from "./Tetris.js"
import NewPiece from "./PieceFactory.js"
import {useState} from 'react'

let initialBoard = Array(20).fill(Array(10).fill(0))

function Game({onClick}) {
  const [board, setBoard] = useState(initialBoard)
  return (
    <div className="stage">
      <Tetris board={board}/>
      <div className="info">
        <div className="score"> Score: 0 </div>
        <button className="quit" onClick={onClick}> Quit </button>
      </div>
    </div>
  );
}

export default Game;
