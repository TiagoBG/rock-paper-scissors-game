import React, { useState } from 'react'
import OptionButtons from '../OptionButtons/OptionButtons'
import './GameScenario.css'
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';

export default function GameScenario() {
  let [option, setOption] = useState('');
  let [opponentOption, setOpponentOption] = useState('');
  let imgSrc, opImgSrc = '';

  if(option === 'rock'){
    imgSrc = rock
  }else if (option === 'paper'){
    imgSrc = paper
  }else if(option === 'scissors' ){
    imgSrc = scissors
  }

  if(opponentOption === 'rock'){
    opImgSrc = rock
  }else if (opponentOption === 'paper'){
    opImgSrc = paper
  }else if(opponentOption === 'scissors' ){
    opImgSrc = scissors
  }

  let frontCards = document.getElementsByClassName('front-little');
  let backCards = document.getElementsByClassName('back-little');

  const moveCards = () => {
    setOpponentsCard();
    Array.from(frontCards).map(x=>x.classList.add('move-front'));
    Array.from(backCards).map(x=>x.classList.add('move-back'));

    setTimeout(() => {
      Array.from(frontCards).map(x=>x.classList.remove('move-front'));
      Array.from(backCards).map(x=>x.classList.remove('move-back'));
    }, 1500);
  }

  const setOpponentsCard = () =>{
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3);

    setOpponentOption(choices[index])
  }
  
  return (
    <section className='game-section'>
        <div className="score" style={{right: '0'}}><h2>Score: 0</h2></div>
      <div className="stage">
      <div className="game-card">
      <div className="front-little">
        <h1>Player's</h1>
        <h1>Card</h1>
      </div>
      <div className="back-little">
        <img id='option-image' src={imgSrc} width='200px' alt={option}/>
        <h1 id='option-name'>{option}</h1>
      </div>
    </div>
    <div className="game-card">
      <div className="front-little">
        <h1>Opponent's</h1>
        <h1>Card</h1>
      </div>
      <div className="back-little">
        <img id='option-image' src={opImgSrc} width='200px' alt={option}/>
        <h1 id='option-name'>{opponentOption}</h1>
      </div>
    </div>     
      </div>
      <div className="action-buttons">
        <button className="option rock" onClick={()=>{setOption('rock'); moveCards();}}>Rock</button>
        <button className="option paper" onClick={()=>{setOption('paper'); moveCards();}}>Paper</button>
        <button className="option scissors" onClick={()=>{setOption('scissors'); moveCards();}}>Scissors</button>
    </div>        
    </section>
  )
}
