import React, { Component } from 'react'
import './Square.css';
/*
rcc class component shortcut
rafc class functional component shortcut
*/
class Square extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return ( // if not game over, allow this function clickChange to be called if you click it-line 13
      <div className="square" onClick={!this.props.isGameOver ? this.props.clickChange : () => console.log('game is over')} >
        {this.props.value}  
      </div>
    )
  }
}

export default Square;

