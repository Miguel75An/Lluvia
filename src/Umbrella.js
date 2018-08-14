import React, { Component } from 'react';

import './Lluvia.css';

class Umbrella extends Component{
    constructor(props){
        super(props);
        this.state={

        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        // console.log("Clicking Umbrella Canopy");
        this.props.update(e);
        
    }

    render(){
        return(
        <div className='umbrellaBox'>
        <p>Umbrella Here</p>
        <button onClick={(e) => this.onClick(e)}>Canopy</button>
        </div>
        );
    }
}

export default Umbrella;