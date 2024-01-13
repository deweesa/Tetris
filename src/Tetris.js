import {useState} from 'react';
import './Tetris.css'

// TODO: Create board
// TODO: Spawn new piece
// TODO: Piece should fall

function Tetris({board}) {
  const renderedBoard = board.map(row => 
    <div className="square"/>)

  return (
    <div>{board.map(row => 
      <div className="row">
        {row.map(square => 
          <div className="square"/>
        )}
      </div>)}
    </div>
  )
}

export default Tetris;
