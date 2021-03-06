import React from 'react';
import './card.styles.css';

export const Card = props => {
    return(
        <div className="card-container">
            <img alt="robot-image" src={`https://robohash.org/${props.robot.id} ?set=set2&size=180x180`}/>
            <h2>{ props.robot.name }</h2>
            <p>{ props.robot.email }</p>
        </div>
    )
}