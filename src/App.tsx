import { useState } from 'react'


import './App.css'

function App() {

  const [score, setScore] = useState({
    user: 0, ai: 0
  })

  const onClick = () => {}
  
  return (
    <div className={'main'}>
      <h1>Game</h1>

      <div className="scoreContainer">
        <div>{ score.user}</div>
        <div>{ score.ai}</div>
      </div>

      <div className="deckContainer">
        <div className="deck">
          <div className="card1"></div>
          <div className="card2"></div>
          <div className="card3"></div>
        </div>

        <div className="card" onClick={onClick}></div>
      </div>

      <div className="selectionContainer">
        <input>
          <label>Draw your card</label>
        </input>
      </div>

    </ div>
  )
}

export default App

//  git commit -m "first commit"
//   git branch -M main
//   git remote add origin https://github.com/victor-t-vector/Eric-s-Game.git
//   git push -u origin main