import React from 'react'

import './Player.css'
import PlayerSelected from './PlayerSelected';


const Player = (props) => {
    const {id, name, position, image} = props.players
    const {deletePlayer} = props

    return (
        
        
        <div className="player-container">
            <button onClick={() => props.selectPlayer(props.players)}>Add</button>
            <button onClick={() => props.deleteFunc(id)}>Delete</button>
            <div>
            <h3>{name}</h3>
            <p>{position}</p>
            </div>
            <img className="pic" src={image}></img>
        </div>
       
    )
}



export default Player