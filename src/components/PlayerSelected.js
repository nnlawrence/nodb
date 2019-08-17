import React, {Component} from 'react'
import axios from 'axios'
import './Player.css'



export default class PlayerSelected extends Component {
    constructor(){
        super()
        this.state={
            edit: false,
            editName: '',
            editPosition: '',
            editImage: '',
        }
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

        handleInput=(val)=>{
            this.setState({
                editName: val
            })
        }

        handleUpdatePlayer=(id)=>{
            let updatedPlayer = {
                id,
                name: this.state.editName,
                position: this.props.selectedPlayer.position,
                image: this.props.selectedPlayer.image
            }
            axios.put(`/api/players/${id}`, updatedPlayer)
            .then(res =>{
                this.props.updatePlayer(res.data)
                this.handleToggle()
            })
        }

        handleDeletePlayer = (id) => {
            axios.delete(`/api/players/${id}`)
            .then(res => {
                this.props.selectedPlayer(res.data)
                if(this.state.edit){
                    this.handleToggle()
                }
            })
        }



    render (){
        console.log(this.props)
        return (
        <div>
            <div className="team">
                {this.props.selectedPlayer
                ? (<div>
                    {!this.state.edit
                    ?(<div className="selectStyle">
                        <h4>{this.props.selectedPlayer.name}</h4>
                        <img src={this.props.selectedPlayer.image}  alt="pro" />
                        <div className='button-div'>
                            <button onClick={this.handleToggle}>Edit</button>
                            <button onClick={()=>this.props.removePlayer   (this.props.index)}>Cut</button>
                        </div>
                    </div>)
                    : (
                        <div className='selectStyle'>
                            <div>
                                <input id="input" value={this.state.editName} onChange={(e) => this.handleInput(e.target.value)}/>
                            </div>
                                <img src={this.props.selectedPlayer.image}  alt="pro" />
                            <div className='button-div'>
                                <button onClick={() => this.handleUpdatePlayer(this.props.selectedPlayer.id)}>Submit</button>
                                <button onClick={this.handleToggle}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>) 
                : (
                    <div></div>
                )}
                
                
            </div>



                
            
        </div>  
        )
    }
}