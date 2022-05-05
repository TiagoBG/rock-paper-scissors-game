import React from 'react'
import GameCard from '../GameCard/GameCard'
import './GameScenario.css'

export default function GameScenario() {
  return (
    <section className='game-section'>
        <div className="score" style={{right: '0'}}><h2>Score: 0</h2></div>
      <div className="stage">
        <GameCard title='Player'/>
        <GameCard title='Opponent'/>       
      </div>
      <div className="action-buttons" style={{ border: '2px solid aqua', width:'850px', height:'150px', margin: 'auto', display:'flex', flexFlow:'row', justifyContent: 'space-around' }}>
        <button className="option" style={{margin: '3rem', padding:'0 3rem', fontWeight:'bold', border: '2px solid red', background: '#FF9595', borderRadius: '25px'}}>Rock</button>
        <button className="option" style={{margin: '3rem', padding:'0 3rem', fontWeight:'bold', border: '2px solid yellow', background: '#FBFF75', borderRadius: '25px'}}>Paper</button>
        <button className="option" style={{margin: '3rem', padding:'0 3rem', fontWeight:'bold', border: '2px solid blue', background: '#759AFF', borderRadius: '25px'}}>Scissors</button>
      </div>        
    </section>
  )
}
