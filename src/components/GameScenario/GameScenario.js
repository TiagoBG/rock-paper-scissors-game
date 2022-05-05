import React from 'react'
import GameCard from '../GameCard/GameCard'
import './GameScenario.css'

export default function GameScenario() {
  return (
    <section className='game-section'>
        <GameCard/>
        <GameCard/>        
    </section>
  )
}
