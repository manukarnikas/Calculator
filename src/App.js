import React, { Component } from 'react';
import './App.css';
import Key from './Components/Key';
import { evaluate } from 'mathjs';

class App extends Component {
  constructor(){
    super();
    this.state = {
      display: ''
    };
    this.addText = this.addText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.evalText = this.evalText.bind(this);
  }

  addText(val){
    this.setState(prevState=>{
        let newState={};
        newState.display =  prevState.display+val;
        return newState;
    });
  }

  clearText(){
    this.setState({
      display : ''
    });
  }

  evalText(){
     try{
      let result = evaluate(this.state.display);
      this.setState({
        display: result
      });
     }
     catch(err){
      console.log(err);
      this.setState({
        display: 'Invalid Computation'
      });

     }
  }

  render() {
    return (
      <div className="grid-container">
          <div className="item-display">
             {this.state.display}
          </div>
          <div className="key">
              <Key value="9" handler={this.addText}/>
          </div>
          <div>
              <Key value="8" handler={this.addText} />
          </div>
          <div>
              <Key value="7" handler={this.addText} />
          </div>
          <div className="op">
              <Key value="/" handler={this.addText} />
          </div>
          <div>
              <Key value="4" handler={this.addText} />
          </div>
          <div>
              <Key value="5" handler={this.addText} />
          </div>
          <div>
              <Key value="6" handler={this.addText} />
          </div>
          <div className="op">
              <Key value="*" handler={this.addText} />
          </div>
          <div>
            <Key value="1" handler={this.addText} />
          </div>
          <div>
            <Key value="2" handler={this.addText} />
          </div>
          <div>
            <Key value="3" handler={this.addText} />
          </div>
          <div className="op">
            <Key value="-" handler={this.addText} />
          </div>
          <div>
            <Key value="." handler={this.addText} />
          </div>
          <div>
            <Key value="0" handler={this.addText} />
          </div>
          <div>
            <Key value="=" handler={this.evalText} />
          </div>
          <div  className="op">
            <Key value="+" handler={this.addText} />
          </div>
          <div className="item-clear">
            <Key value="CLEAR" handler={this.clearText}/>
          </div>
      </div>
    );
  }
}    

export default App;
