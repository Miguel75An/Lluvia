import React, { Component } from 'react';

import './Lluvia.css';

class Poem extends Component{
    constructor(props){
        super(props);
        this.state={
            stanza:[],
            drop_word:"###blank###",
        };
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.processVerse = this.processVerse.bind(this);
    }

    onDragOver(ev){
        console.log('dragOver');
        ev.preventDefault();
    }

    onDrop(ev){
        //There should be a state called CURRENT_VERSE

        // Get <Lluvia /> component's new current_word and word_index        
        let replacement = ev.dataTransfer.getData('new_word'); 
        let new_index   = ev.dataTransfer.getData('new_index');

        // Word just dragged becomes the new drop_word
        this.setState({drop_word:replacement});

        //Make an poemUpdate() call
        this.props.update(ev,replacement,parseInt(new_index,10));
        //Things pass through set(Data) can only be strings. Objects can be converted to JSONs first.
    }

    processVerse(verse){
        let copy_verse = verse;
        let drop_field = <a 
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e)}
                >
                {this.state.drop_word}
                </a>;

        //Left: chars before #, Right: chars after #
        let left = "";
        let right = "";

        for(let i=0; i<copy_verse.length; i++){
            if(copy_verse[i] === '#'){
                left = copy_verse.slice(0,i);
                right = copy_verse.slice(i+1,copy_verse.length);
                break;
            }
        }

        return <div>{left}{drop_field}{right}</div>;
    }

    addToStanza(){

    }


    render(){
        
        return(
        <div className='poemBox'>
            <p>Oh! Those words, unmentionable. Unwritten in the air.</p>
            <br></br>

            {this.state.stanza}

            {this.processVerse(poem_lines[this.props.poem_word])}

        </div>);
    }
}

 const poem_lines = { "none": "Indeed it rains? Here #?",
               "w0": "# where are we? ",
               "w1": "It's me here and you are #",
               "w2": "Oh it's #, but why?",
               "w3": "The # town is far away",
               "w4": "The # sea is calm",
               "w5": "Sunlight, radiant #",
               "w6": "Do not fear, million # umbrellas",
               "w7": "# what a vague feeling, lost yet so full",
               "w8": "When did this happen",
               "w9": "A dance under the rain #",
               "w10": "Endless nights # filled with beauty",
               "w11": "# I do recall your name now",
               "w12": "Castles fall with # water",
               "w13": "Inconsistent weather, yet umbrella at hand",
               "w14": "Streets of reflections, a light # mist",
               "w15": "Aria, deep and far away",
               "w16": "Those trees so tall in the horizon",
               "w17": "Dimn lights burning in the rain",
               "w18": "Elegant # suits, adorned with illusion",
               "w19": "Oh, have you found it?",
               "w20": "So precise, yet so abstract #",
               "w21": "A pile of # endless books",
               "w22": "Well, the # clock is nowhere",
               "w23": "A rotation quite #",
               "w24": "Increadible tall # trees",
               "w25": "Surrounded by # mist",
               "w26": "# birds of the island",
               "w27": "Castles reach the # clouds",
               "w28": "Oh Aria, how #",
               "w29": "Incandecent # lights far away",
               "w30": "# things and sweet events",
               "w31": "Indeed # here and there"
            }

export default Poem;