import React, { useEffect, useState } from 'react'
import GameCard from '../GameCard/GameCard'
import OptionButtons from '../OptionButtons/OptionButtons'
import './GameScenario.css'

export default function GameScenario() {
  let [option, setOption] = useState('');
  
  return (
    <section className='game-section'>
        <div className="score" style={{right: '0'}}><h2>Score: 0</h2></div>
      <div className="stage">
        <GameCard className='option-card' title='Player' option = {option}/>
        <GameCard className='option-card' title='Opponent' option = {option}/>       
      </div>
      <div className="action-buttons">
        <button className="option rock" onClick={()=>{setOption('rock'); document.getElementsByClassName('option-card').classList.add('move')}}>Rock</button>
        <button className="option paper" onClick={()=>setOption('paper')}>Paper</button>
        <button className="option scissors" onClick={()=>setOption('scissors')}>Scissors</button>
    </div>        
    </section>
  )
}
