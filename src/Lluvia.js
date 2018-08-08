import React, { Component } from 'react';
import './Lluvia.css';

// File Components
import Poem from './Poem';
import DragBox from './DragBox';
import Umbrella from './Umbrella';

//A function that takes the input from the drag words
//and converts it to some equivalent state (ex:back-color)


class Lluvia extends Component{
    constructor(props){
        super(props);
        this.state={
            environment:{
                place_state: "",
                sky_state: "",
                umbrella_state: "",
            },
            level: 0, //Level of poem 
        };
    }

    render(){
        return(
        <div className='container'>
            <Poem />
            <DragBox />
            <Umbrella />
        </div>);
    }
}



export default Lluvia;