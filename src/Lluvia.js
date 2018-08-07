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
            tasks: [
            {name:"word1",
            category:"empty", 
            bgcolor: "yellow"},  
         
           {name:"word2", 
            category:"empty", 
            bgcolor:"pink"},  
         
           {name:"word3", 
            category:"empty", 
            bgcolor:"skyblue"}]
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