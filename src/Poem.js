import React, { Component } from 'react';

import './Lluvia.css';

class Poem extends Component{
    constructor(props){
        super(props);
        this.state={
            stanza:[],
            slots: [
                {numeral:0,
                content:'__noun__'},
            ]
        };
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDragOver(ev){
        console.log('dragOver');
        ev.preventDefault();
    }

    onDrop(ev,arr_index){
        let replacement = ev.dataTransfer.getData('new_word');
        let slots_copy = this.state.slots;
        slots_copy[arr_index].content = replacement;
        this.setState({slots:slots_copy});

        //Update <Lluvia /> component using function
        let new_index = ev.dataTransfer.getData('new_index');
        
        //Things pass through set(Data) can only be strings. Objects can be converted to JSONs first.
        this.props.update(ev,replacement,parseInt(new_index,10));
    }

    shouldComponentUpdate(nextProps){
        //Update poem lines if level has changed
        //Else do nothing

        //If we need to update then WE USE add
        return(nextProps.level === this.props.level)?false:true;
    }

    processVerse(){

    }

    addToStanza(){

    }

    componentDidMount(){
        //Might not need this!
        let initial_stanza = this.state.stanza;
        initial_stanza.push(poem_lines[this.props.current_word]);

        this.setState({stanza:initial_stanza});
    }

    render(){
        let blanks = [];
        // for(let i=0; i<this.state.slots.length; i++){
        //     blanks.push(
        //         <div 
        //         onDragOver={(e) => this.onDragOver(e)}
        //         onDrop={(e) => this.onDrop(e,i)}
        //         key={this.state.slots[i].numeral}>
        //         {this.state.slots[i].content}
        //          </div>
        //     )
        // }

        
        return(
        <div className='poemBox'>
            <p>Oh! Those words, unmentionable. Unwritten in the air.</p>
            <br></br>

            {/* <div onDragOver={(e) => this.onDragOver(e)}
                 onDrop={(e) => this.onDrop(e,'complete')}>{this.state.verse}</div> */}
            {this.state.stanza}
            {poem_lines[this.props.current_word]}
            {blanks}

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
               "w21": "",
               "w22": "",
               "w23": "",
               "w24": "",
               "w25": "",
               "w26": "",
               "w27": "",
               "w28": "",
               "w29": "",
               "w30": "",
               "w31": ""
            }

export default Poem;