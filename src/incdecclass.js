import React,{useState} from "react";

class ClassIncDec extends React.Component{
    constructor(){
        //state is object
        super()
        this.state={
            number:0
    }
}
    increment=()=>{
        //setnumber(number+1) state changes
        this.setState({number:this.state.number+1})   
    }

    decrement =()=>{
        //setnumber(number-1) state changes
        this.setState({number:this.state.number-1});
    }

    render(){
        return (
            <div><p>by using class component</p>
            <p>number is : {this.state.number}</p>
            <button type="button" onClick={this.increment}>add</button>
            <button type="button" onClick={this.decrement}>sub</button>
            </div>

        )
    };
}

export default ClassIncDec; 