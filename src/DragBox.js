import React, { Component } from 'react';

import './Lluvia.css';

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

    render(){
        let selections = [];

        for(let i=0; i < this.state.words.length; i++){
            selections.push(<p onDragStart={(e) => this.onDragStart(e,this.state.words[i].word)}
                            draggable
                            key={this.state.words[i].index}>{this.state.words[i].word}</p>);
        }
        return(
        <div className='dragBox'>

        {/* <p onDragStart={(e) => this.onDragStart(e,"Came from DragBox")} draggable>Pick your words </p> */}

        {selections}

        </div>);
    }
}

export default DragBox;