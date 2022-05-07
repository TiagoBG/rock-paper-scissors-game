import React, { useEffect, useState } from "react";
import "./GameCard.css";
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';

export default function GameCard(props) {
  let selectedOption = props.option;
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setImgSrc(selectedOption)
  },[])
  
/*   useEffect(()=>{
    document.getElementById('option-image').src = selectedOption
  }, []) */
  
  return (
    <div className="game-card">
      <div className="front-little">
        <h1>{props.title}</h1>
        <h1>Card</h1>
      </div>
      <div className="back-little">
        <img id='option-image' src={`'../../assets/images/${imgSrc}.png`} width='200px' alt={selectedOption}/>
        <h1 id='option-name'>{selectedOption}</h1>
      </div>
    </div>
  );
}
