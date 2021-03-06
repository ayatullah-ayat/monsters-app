import React from 'react'
import './card-list.styles.css';
import { Card } from '../card/card-component'

export const CardList = (props) => {
    return(
        <div className= "card-list">
            {props.robots.map(robot => {
                return (
                    <Card key={robot.id} robot={ robot } />
                )
            })}
        </div>
    )
}