import React, { useState } from 'react'
import './GameScenario.css'
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';

export default function GameScenario() {
  let [option, setOption] = useState('');
  let [opponentOption, setOpponentOption] = useState('');
  let [playerScore, setPlayerScore] = useState(0);
  let [playerLives, setPlayerLives] = useState(['1', '2', '3']);

  let frontCards = document.getElementsByClassName('front-little');
  let backCards = document.getElementsByClassName('back-little');

  let imgSrc, opImgSrc = '';

  const setOpponentsCard = () =>{
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*3);

    setOpponentOption(choices[index]);
  }

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


  const checkConditions = () => {  
    console.log('CHEKEALOOO', option, opponentOption, playerScore)  
    if((option === 'rock' && opponentOption === 'scissors') || (option === 'paper' && opponentOption === 'rock') || (option === 'scissors' && opponentOption === 'paper')){
      setPlayerScore(playerScore++);
    }else if ((option === 'rock' && opponentOption === 'paper') || (option === 'paper' && opponentOption === 'scissors') || (option === 'scissors' && opponentOption === 'rock')){
      
      let newLives = playerLives.pop()

      setPlayerLives(newLives);
      console.log(playerLives)
    }
  }    

  const moveCards = () => {
    setOpponentsCard();

    Array.from(frontCards).map(x=>x.classList.add('move-front'));
    Array.from(backCards).map(x=>x.classList.add('move-back'));

    checkConditions();

    setTimeout(() => {
      Array.from(frontCards).map(x=>x.classList.remove('move-front'));
      Array.from(backCards).map(x=>x.classList.remove('move-back'));
    }, 1500);
  }

  

  
  return (
    <section className='game-section'>
        <div className="score" style={{right: '0', display:'flex', flexFlow:'row'}}><h2>Score: {0}</h2><span style={{display:'flex', flexFlow: 'row'}}><h2 style={{marginLeft: '15rem'}}>Lives:</h2>{playerLives.map(el => <h2 style={{margin: '1.2rem 0.2rem'}} key={el}>&#128151;</h2>)}</span></div>
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
