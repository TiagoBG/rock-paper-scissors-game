import React from 'react';
import './GameCard.css'

export default function GameCard() {
  return (
    <div className='game-card'>
     <div className="game-card-side front">
          <h1>GameCard</h1>
          <h3 style={{marginTop:'15%'}}>'player' card</h3>
        </div>
        <div className="game-card-side back">
        <img src='' alt='rock-paper-scissors' style={{maxWidth:'80%', marginTop:'8%'}}/>
          <h4>Element</h4>
        </div></div>
  )
}
