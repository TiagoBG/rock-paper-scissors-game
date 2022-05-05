import React from 'react';
import './InstructionsCard.css';
import GameImg from '../../assets/images/game-img.jpeg'

export default function InstructionsCard() {
  return (
    <div className="instructions-card">
        <div className="instructions-card-side front">
          <h1>Welcome to rock, paper, scissors</h1>
          <img src={GameImg} alt='rock-paper-scissors' style={{maxWidth:'80%', marginTop:'8%'}}/>
          <h3 style={{marginTop:'15%'}}>Flip to see the instructions</h3>
        </div>
        <div className="instructions-card-side back">
          <h2>Instructions</h2>
          <h4>1. Select the option you play</h4>
        </div>
    </div>
  )
}
