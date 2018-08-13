import React, { Component } from 'react';

import './Lluvia.css';

const words = ['w0','w1','w2','w3',
               'w4','w5','w6','w7',
               'w8','w9','w10','w11',
               'w12','w13','w14','w15',
               'w16','w17','w18','w19',
               'w20','w21','w22','w23',
               'w24','w25','w26','w27',
               'w28','w29','w30','w31'];

class DragBox extends Component{
    constructor(props){
        super(props);
        this.state={
            words:[
                {word:'Orwellian',
                index: 0},
                {word:'Kafkasque',
                index: 1}],
        };
        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(ev,word){
        console.log('Drag Start: ' + word);
        ev.dataTransfer.setData('new_word',word);
    }

    displayLevelWords(level,node_number){
        // Takes the poem level to display words 
        // corresponding to that level
        if(level === 0){
            return [0,1];
        }
        else if(level === 1){
            return [2*(node_number + 1) + node_number,
                    2*(node_number + 1) + node_number + 2];
        }
        else if(level === 2){
            return [4*(node_number), 4*(node_number) + 3];
        }
    }

    render(){
        let selections = [];

        let word_range = this.displayLevelWords(this.props.level, this.props.node_number);

        for(let i=word_range[0]; i<word_range[1]+1; i++){
            selections.push(<p onDragStart={(e) => this.onDragStart(e,words[i])}
                            draggable
                            key={i}>{words[i]}</p>);
        }

        // for(let i=0; i < this.state.words.length; i++){
        //     selections.push(<p onDragStart={(e) => this.onDragStart(e,this.state.words[i].word)}
        //                     draggable
        //                     key={this.state.words[i].index}>{this.state.words[i].word}</p>);
        // }
        
        return(
        <div className='dragBox'>

        {/* <p onDragStart={(e) => this.onDragStart(e,"Came from DragBox")} draggable>Pick your words </p> */}

        {selections}

        </div>);
    }
}

export default DragBox;