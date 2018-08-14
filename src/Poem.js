import React, { Component } from 'react';

import './Lluvia.css';

class Poem extends Component{
    constructor(props){
        super(props);
        this.state={
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

    render(){
        let blanks = [];
        for(let i=0; i<this.state.slots.length; i++){
            blanks.push(
                <div 
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e,i)}
                key={this.state.slots[i].numeral}>
                {this.state.slots[i].content}
                 </div>
            )
        }
        return(
        <div className='poemBox'>
            <p>Oh! Those words, unmentionable. Unwritten in the air.</p>
            <br></br>

            {/* <div onDragOver={(e) => this.onDragOver(e)}
                 onDrop={(e) => this.onDrop(e,'complete')}>{this.state.verse}</div> */}

            {blanks}

        </div>);
    }
}

export default Poem;