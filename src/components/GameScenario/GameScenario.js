import React, { useState } from 'react'
import Swal from 'sweetalert2';
import './GameScenario.css'
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';

import correctAudio from '../../assets/audio/correct.mp3';
import wrongAudio from '../../assets/audio/wrong.wav';


export default function GameScenario() {
  let [round, setRound] = useState({
    option : '',
    opponentOption: '',
    playerScore : 0,
    playerLives: ['1', '2', '3']
  });
  let [streak, setStreak] = useState(0);

  let frontCards = document.getElementsByClassName('front-little');
  let backCards = document.getElementsByClassName('back-little');

  let imgSrc, opImgSrc = '';

  let correct = new Audio(correctAudio);
  let wrong = new Audio(wrongAudio);

  const checkRound = (option) =>{
    let opponentOption = setOpponentsCard();    
    const [playerScore, playerLives] = checkConditions(option, opponentOption);     
    moveCards(option, opponentOption, playerScore, playerLives);
  }

  const setOpponentsCard = () =>{
    let choices = ['rock', 'paper', 'scissors'];
    //let index = Math.floor(Math.random()*3);
    return choices[0];
  }

  if(round.option === 'rock'){
    imgSrc = rock
  }else if (round.option === 'paper'){
    imgSrc = paper
  }else if(round.option === 'scissors' ){
    imgSrc = scissors
  }

  if(round.opponentOption === 'rock'){
    opImgSrc = rock
  }else if (round.opponentOption === 'paper'){
    opImgSrc = paper
  }else if(round.opponentOption === 'scissors' ){
    opImgSrc = scissors
  }

  const checkConditions = (option, opponentOption) => {  
    if((option === 'rock' && opponentOption === 'scissors') || (option === 'paper' && opponentOption === 'rock') || (option === 'scissors' && opponentOption === 'paper')){
      correct.play();
      setStreak(++streak);
      console.log(streak, typeof(streak))
      let newStats = [round.playerScore+=1, round.playerLives];
      return newStats;

    }else if ((option === 'rock' && opponentOption === 'paper') || (option === 'paper' && opponentOption === 'scissors') || (option === 'scissors' && opponentOption === 'rock')){
      wrong.play();
      setStreak(0); //TODO: FIX THIS BUG
      console.log(streak);
      round.playerLives.pop();
      let newStats = [round.playerScore, round.playerLives];
      return newStats;      
    }else{
      return [round.playerScore, round.playerLives];
    }
  }    

  const moveCards = (option, opponentOption, playerScore, playerLives) => {  
    Array.from(frontCards).map(x=>x.classList.add('move-front'));
    Array.from(backCards).map(x=>x.classList.add('move-back'));    

    if(streak!==0 && streak % 3 === 0){
      round.playerLives.push((round.playerLives.length+1).toString());
      setRound({option, opponentOption, playerScore, playerLives});      
      console.log(playerLives)      
    }else{
      setRound({option, opponentOption, playerScore, playerLives});
    }

    let optionButtons = document.getElementsByClassName('option');
    Array.from(optionButtons).map(x=> x.setAttribute('disabled', ''));
    setTimeout(() => {
      Array.from(frontCards).map(x=>x.classList.remove('move-front'));
      Array.from(backCards).map(x=>x.classList.remove('move-back'));      
      if(round.playerLives.length === 0){
        Swal.fire(
          'Game Over',
          `Your score is: ${round.playerScore}`,
          'warning'
        )
      }else{
        Array.from(optionButtons).map(x=> x.removeAttribute('disabled'));
      }
    }, 1500);
  }
  
  return (
    <section className='game-section'>
        <div className="score" style={{right: '0', display:'flex', flexFlow:'row'}}><h2>Score: {round.playerScore}</h2><span style={{display:'flex', flexFlow: 'row'}}><h2 style={{marginLeft: '25rem'}}>Lives:</h2>{round.playerLives.map(el => <h2 style={{margin: '1.2rem 0.2rem'}} key={el}>&#128151;</h2>)}</span></div>
      <div className="stage">
      <div className="game-card">
      <div className="front-little">
        <h1>Player's</h1>
        <h1>Card</h1>
      </div>
      <div className="back-little">
        <img id='option-image' src={imgSrc} width='200px' alt={round.option}/>
        <h1 id='option-name'>{round.option}</h1>
      </div>
    </div>
    <div className="game-card">
      <div className="front-little">
        <h1>Opponent's</h1>
        <h1>Card</h1>
      </div>
      <div className="back-little">
        <img id='option-image' src={opImgSrc} width='200px' alt={round.option}/>
        <h1 id='option-name'>{round.opponentOption}</h1>
      </div>
    </div>     
      </div>
      <div className="action-buttons">
        <button className="option rock" onClick={()=>{checkRound('rock');}}>Rock</button>
        <button className="option paper" onClick={()=>{checkRound('paper');}}>Paper</button>
        <button className="option scissors" onClick={()=>{checkRound('scissors');}}>Scissors</button>
    </div>        
    </section>
  )
}
