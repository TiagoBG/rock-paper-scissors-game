import React from 'react';
import './InstructionsCard.css';
import GameImg from '../../assets/images/game-img.jpeg'

export default function InstructionsCard() {
  return (
    <div className="instructions-card">
        <div className="front">
          <h1>Welcome to rock, paper, scissors</h1>
          <img
            src={GameImg}
            alt="rock-paper-scissors"
            style={{ maxWidth: "80%", marginTop: "8%" }}
          />
          <h3 style={{ marginTop: "15%" }}>Flip to see the instructions</h3>
        </div>
        <div className="back">
          <h2>Instructions</h2>
          <ol style={{textAlign: 'left'}}>
            <h4>
              <li>You will have 3 lives</li>
            </h4>
            <h4>
              <li>Select the option you play by clicking on the option button located on the bottom</li>
            </h4>
            <h4>
              <li>Once you click on the option your opponent card will also be revealed</li>
            </h4>
            <h4>
              <li>If you win you get +1 points on your score</li>
            </h4>
            <h4>
              <li>If you lose you get -1 lives</li>
            </h4>
            <h4>
              <li>After winning 3 times on a row get +1 lives</li>
            </h4>
            <h4>
              <li>Once you lose all of your lives the game will be over</li>
            </h4>
            <h4>
              <li>Remember to have fun!</li>
            </h4>
          </ol>
        </div>
      </div>
  )
}
