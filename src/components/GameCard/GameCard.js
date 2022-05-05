import React from "react";
import "./GameCard.css";

export default function GameCard(props) {
  return (
    <div className="game-card">
      <div className="front-little">
        <h1>{props.title}</h1>
        <h1>Card</h1>
      </div>
      <div className="back-little"></div>
    </div>
  );
}
