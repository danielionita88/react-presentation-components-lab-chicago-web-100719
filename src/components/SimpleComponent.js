// Code SimpleComponent Here
import React from 'react'

class SimpleCOmponent extends React.Component{
    constructor(){
        super()
        this.state={
            mood: 'happy'
        }
    }

    handleClick =() =>{
        const mood= this.state.mood ==='happy'? 'sad':'happy'
        this.setState({
            mood: mood
        })
    }

    render(){
        return <div onClick={this.handleClick}>
            {this.state.mood}
        </div>
    }

}

export default SimpleCOmponent