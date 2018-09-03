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
                //Might need more things to change the environment
                //Ideas: rain, thunder, castle, water ponds, broken umbrella, holes in umbrella
                //sunlight rays, 

                //words: orwellian, kafkasque
            },
            level: 0,             //Level of poem 
            poem_word:"none",     //This one changes only when umbrella is updated
            current_word: "none", //Changes constantly with every drag
            word_index: -1,       //Used to render the choice words in DragBox
        };

        this.umbrellaUpdate = this.umbrellaUpdate.bind(this);
        this.poemUpdate = this.poemUpdate.bind(this);
    }

    umbrellaUpdate(e){
        // Updates this.state.level: printing the new part of the poem
        console.log("Updating this.state.environment");
        
        let nextLevel = this.state.level + 1;
        this.setState({level:nextLevel});   //Increase level by one
        this.setState({poem_word:this.state.current_word}) //Update the word that renders a verse
    }

    poemUpdate(e,new_word,new_index){

        // current_word gets a new value that might become
        // poem_word if there is an umbrellaUpdate() call       
        this.setState({current_word:new_word});
        this.setState({word_index:new_index});
    }

    render(){
        return(
        <div className='container'>
            <Poem    level={this.state.level} poem_word={this.state.poem_word} update={this.poemUpdate} />
            <DragBox level={this.state.level} word_index={this.state.word_index}/>
            <Umbrella update={this.umbrellaUpdate} />
            {env_conditions[this.state.current_word]};
        </div>);
    }
}



export default Lluvia;