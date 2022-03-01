import React from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component {
  // special initializer method
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        null, null, null,
        null, null, null,
        null, null, null,
      ],
      turn: 'X',
      // squares: [
      //   [null, null, null],
      //   [null, null, null],
      //   [null, null, null],
      // ],
    
      // square: Array(3).fill(Array(3).fill(null)),
    }
  }

  componentDidUpdate(prevProps) {
    // when we go from restart of false to restart of true then we reset the board
    if (!prevProps.restart && this.props.restart) {
      this.setState(
        {
          squares: [
            null, null, null,
            null, null, null,
            null, null, null,
          ],
        }
      );
    }
  }

  // custom method
  handleCellChange(index) {
    // check whether the cell is empty
    if (this.state.squares[index]) {
      return;
    }

    // this.state.squares[index] = 'X'; // bad cannot update state directly in react
    // console.log(index);
    const updatedSquares = [...this.state.squares]; // make copy of the current state of squares
    updatedSquares[index] = this.state.turn;
    this.setState({squares: updatedSquares});
    this.checkGameOver(updatedSquares);
    this.flipTurn();
  }

  checkGameOver(squares) {
    // check for horizontal win
    console.log(squares[0], squares[1], squares[2]);
    const winningCombinations = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // negative slope diagonal
      [6, 4, 2], // positive slope diagonal
    ];

    for (let combination of winningCombinations) {  
      const [a, b, c] = combination;
      if (squares[a] != null && squares[a] === squares[b] && squares[b] === squares[c]) {
        console.log('winner is ', this.state.turn);
        this.props.gameOver();
      }
    }


    // check for vertical win

    // check for diagonal win

    // check for a tie
  }

  flipTurn() {
     // flip the turn
     if (this.state.turn === 'X') {
      // this.state.turn = 'O';
      this.setState({turn: 'O'});
    } else { // it is an 'O' currently
      this.setState({turn: 'X'});
    }
  }

  // inherted method from the React.Component class
  // we are overriding this method
  render() {
    // return <div className="board">
    //     <Square value="X"/>
    //     <Square value="O"/>
    //     <Square value="X"/>
    //     <Square value="X"/>
    //     <Square value="O"/>
    //     <Square value="X"/>
    //     <Square value="X"/>
    //     <Square value="O"/>
    //     <Square value="X"/>
    // </div>

    // to make a dynamic class, give a javascript expression here - line 115.
    // can use this.prop to disable a square when game over prevents from clicking on other squares
    return (<div className={`board ${this.props.isGameOver ? 'board-game-over' : ''}`}> 
      {this.state.squares.map(
        (val, index) =>
          <Square
            value={val}
            key={index}
            isGameOver={this.props.isGameOver} // pass it here- this. props here to each square
            clickChange={() => this.handleCellChange(index)}
          />
      )}
    </div>)
  }
}

export default Board;