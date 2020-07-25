import React, { Component } from 'react';
import './Key.css';

class Key extends Component{
    render(){
        return (
            <button className="full-width" onClick={event=>{this.props.handler(this.props.value)}}>{this.props.value}</button>
        );
    }
}

export default Key;
