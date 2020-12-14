import React from 'react'; 
import './card.styles.css'; 

export const Card = props => (
    <div className = 'card-container'>
        <img alt='character' src={(`../../img/${props.character.id}.jpeg`)} width={150} height={150} style={{alignSelf:'center'}}/>
        <h1>{props.character.name}</h1>
        <p style={{fontWeight:'bold'}}>{props.character.quote}</p>
    </div>
); 