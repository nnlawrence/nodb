import React from 'react'

import './Player.css'
import PlayerSelected from './PlayerSelected';


const Player = (props) => {
    const {id, name, position, image} = props.players
    const {deletePlayer} = props

    return (
        
        
        <div className="player-container">
            <div id="btnflx"><button onClick={() => props.selectPlayer(props.players)}>Draft</button>
            <button onClick={() => props.deleteFunc(id)}>Retire</button>
            </div><div>
            <h3>{name}</h3>
            <p>{position}</p>
            </div>
            <img className="pic" src={image}></img>
        </div>
       
    )
}



export default Player