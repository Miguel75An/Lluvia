import React, { Component } from 'react';
import './Lluvia.css';

// File Components
import Poem from './Poem';
import DragBox from './DragBox';
import Umbrella from './Umbrella';

//A function that takes the input from the drag words
//and converts it to some equivalent state (ex:back-color)

//Build dictionary here

//Instead of using the indexes, it is better to use the actual word
//as the key to the values that need to change. In this way, 
//we save ourselves from using indexes and take advantage of the nature 
//of dictionaries

//Environment conditions 
const env_conditions = {
    "none" :"none at all",
    "w0": "make sky orange",
    "w1": ["make rain stop","make town change to city","change umbrella color"],
    "w3": "this value can take the form of many ways"
};


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
            current_word: "none", //Current node
            word_index: -1,
        };

        this.umbrellaUpdate = this.umbrellaUpdate.bind(this);
        this.poemUpdate = this.poemUpdate.bind(this);
    }

    umbrellaUpdate(e){
        // Updates this.state.level: printing the new part of the poem
        console.log("Updating this.state.environment");
        
        //Use Set State here! Increase level word by one
        let nextLevel = this.state.level + 1;
        this.setState({level:nextLevel});


    }

    poemUpdate(e,new_word,new_index){
        console.log("Updating this.state.node_number");

        //Since the render() function will return {changes[node_number]}
        //then it is possible to 
        this.setState({current_word:new_word});
        this.setState({word_index:new_index});
        
        console.log("NewWord: " + new_word + " NewIndex: " + new_index);
    }

    render(){
        return(
        <div className='container'>
            <Poem update={this.poemUpdate} />
            <DragBox level={this.state.level} word_index={this.state.word_index}/>
            <Umbrella update={this.umbrellaUpdate} />
            {env_conditions[this.state.current_word]};
        </div>);
    }
}



export default Lluvia;