import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './GameScenario.css';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';

import correctAudio from '../../assets/audio/correct.mp3';
import wrongAudio from '../../assets/audio/wrong.wav';

export default function GameScenario() {

  const [round, setRound] = useState({
    option: '',
    opponentOption: '',
    playerScore: 0,
    playerLives: ['1', '2', '3']
  });

  const streak = useRef(0);
  const imgSrc = useRef();
  const opImgSrc = useRef();
  const playerOption = useRef();
  const oponentOption = useRef();
  const images = { rock, paper, scissors };

  const frontCards = [];
  const backCards = [];
  const buttonsOptions = [];

  function addFrontCard(card) {
    if (card)
      frontCards.push(card);
  }

  function addBackCard(card) {
    if (card)
      backCards.push(card);
  }

  function addButtonOption(button) {
    if (button)
      buttonsOptions.push(button);
  }

  function disableOptions() {
    buttonsOptions.forEach(button => {
      button.disabled = true;
    })
  }

  function activeOptions() {
    buttonsOptions.forEach(button => {
      button.disabled = false;
    })
  }

  function moveOrMoveAgain(moveAgain = false) {
    if (moveAgain) {
      frontCards
        .forEach(frontCard => frontCard.classList.remove('move-front'));

      backCards
        .forEach(backCard => backCard.classList.remove('move-back'));

    } else {
      frontCards
        .forEach(frontCard => frontCard.classList.add('move-front'));

      backCards
        .forEach(backCard => backCard.classList.add('move-back'));
    }
  }

  function moveCards() {

    disableOptions();
    moveOrMoveAgain();

    setTimeout(() => {

      const auxRound = { ...round };

      if (streak.current !== 0 && streak.current % 3 === 0) {
        auxRound.playerLives.push((auxRound.playerLives.length + 1).toString());
      }

      setRound(auxRound);
      moveOrMoveAgain(true);
      if (auxRound.playerLives.length) {
        activeOptions();
      }
      else {
        Swal.fire(
          'Game Over',
          `Your score is: ${round.playerScore}`,
          'warning'
        )
      }

    }, 1200);

  }

  function setOponentoption() {
    const choice = ['rock', 'paper', 'scissors'][0];
    oponentOption.current = choice;
  }

  function setImages() {
    imgSrc.current.src = images[playerOption.current];
    opImgSrc.current.src = images[oponentOption.current];
  }

  function checkConditions() {

    const currentPlayerOption = playerOption.current;
    const currentOponentOption = oponentOption.current;

    const winner =
      (currentPlayerOption === 'rock' && currentOponentOption === 'scissors') ||
      (currentPlayerOption === 'paper' && currentOponentOption === 'rock') ||
      (currentPlayerOption === 'scissors' && currentOponentOption === 'paper');

    if (winner) {
      streak.current++;
      round.playerScore++;
      new Audio(correctAudio).play();
    } else if (round.playerLives.length && currentOponentOption !== currentPlayerOption) {
      round.playerLives.pop();
      streak.current = 0;
      new Audio(wrongAudio).play();
    }
  }

  function play(e) {
    const [, option] = e.target.classList;
    playerOption.current = option;
    setOponentoption();
    setImages();
    moveCards();
    checkConditions();
  }

  return (
    <section className='game-section'>
      <div className="score" style={{ right: '0', display: 'flex', flexFlow: 'row' }}><h2>Score: {round.playerScore}</h2><span style={{ display: 'flex', flexFlow: 'row' }}><h2 style={{ marginLeft: '25rem' }}>Lives:</h2>{round.playerLives.map(el => <h2 style={{ margin: '1.2rem 0.2rem' }} key={el}>&#128151;</h2>)}</span></div>
      <div className="stage">
        <div className="game-card">
          <div className="front-little" ref={addFrontCard}>
            <h1>Player's</h1>
            <h1>Card</h1>
          </div>
          <div className="back-little" ref={addBackCard}>
            <img id='option-image' ref={imgSrc} width='200px' alt={round.option} />
            <h1 id='option-name'>{round.option}</h1>
          </div>
        </div>
        <div className="game-card">
          <div className="front-little" ref={addFrontCard}>
            <h1>Opponent's</h1>
            <h1>Card</h1>
          </div>
          <div className="back-little" ref={addBackCard}>
            <img id='option-image' ref={opImgSrc} width='200px' alt={round.option} />
            <h1 id='option-name'>{round.opponentOption}</h1>
          </div>
        </div>
      </div>
      <div className="action-buttons">
        <button className="option rock" ref={addButtonOption} onClick={play}>Rock</button>
        <button className="option paper" ref={addButtonOption} onClick={play}>Paper</button>
        <button className="option scissors" ref={addButtonOption} onClick={play}>Scissors</button>
      </div>
    </section>
  )
}
