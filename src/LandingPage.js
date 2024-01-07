function LandingPage ({onClick}) {
  return (
    <div>
      <h1> Tetris! </h1>
      <div className="Buttons">
        <button onClick={onClick}>Play</button>
        <button >Help</button>
      </div>
      <p>
        High Scores (implementing later)
      </p>
    </div>
  )

}

export default LandingPage; 
