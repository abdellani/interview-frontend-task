import React from 'react';
import Board from '../components/board';
import Form from '../components/form';
import ScorePanel from '../components/scorePanel';

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      height: 10,
      width: 10,
      gameStarted: false,
      gameFinished: false,
      squares: [],
      redSquarePosition: -1,
      movesCount: 0,
      greenSquaresCount: 0,
    };
    this.state = { ...this.initialState };
  }
  reset() {
    this.setState(this.initialState);
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: parseInt(e.target.value),
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.generateMatrix();
    this.setState({
      gameStarted: true,
    });
  }
  generateMatrix() {
    let { height, width } = this.state;
    let squares = new Array(height * width).fill(0);
    let greenSquaresCount = Math.ceil(Math.sqrt(height * width));
    let redSquarePosition = Math.floor(height/2) * width + Math.floor(width/2);
    squares[redSquarePosition] = 2;

    for (let i = 0; i < greenSquaresCount; i++) {
      let random = Math.floor(Math.random() * height * width);
      if (random === redSquarePosition || squares[random] === 1) {
        i--;
        continue;
      }
      squares[random] = 1;
    }
    this.setState({
      squares,
      redSquarePosition,
      greenSquaresCount,
    });
  }
  handleKeyDown(e) {
    let {
      squares,
      redSquarePosition,
      width,
      height,
      movesCount,
      greenSquaresCount,
      gameFinished,
    } = this.state;
    let keysMap = {
      37: {
        label: 'LEFT',
        isValidMove: () => {
          let target = redSquarePosition - 1;
          return target >= 0 && target % width < redSquarePosition % width;
        },
        getNewPosition: () => redSquarePosition - 1,
      },
      38: {
        label: 'UP',
        isValidMove: () => {
          let target = redSquarePosition - width;
          return target >= 0;
        },
        getNewPosition: () => redSquarePosition - width,
      },
      39: {
        label: 'RIGHT',
        isValidMove: () => {
          let target = redSquarePosition + 1;
          return (
            target < height * width &&
            target % width > redSquarePosition % width
          );
        },
        getNewPosition: () => redSquarePosition + 1,
      },
      40: {
        label: 'DOWN',
        isValidMove: () => {
          let target = redSquarePosition + width;
          return width * height > target;
        },
        getNewPosition: () => redSquarePosition + width,
      },
    };
    if (!keysMap[e.keyCode] || !keysMap[e.keyCode].isValidMove()) {
      return;
    }

    movesCount++;
    squares = [...squares];
    let newPosition = keysMap[e.keyCode].getNewPosition();
    if (squares[newPosition] === 1) {
      greenSquaresCount--;
      if (greenSquaresCount === 0) {
        gameFinished = true;
      }
    }
    squares[redSquarePosition] = 0;
    squares[newPosition] = 2;

    this.setState({
      squares,
      redSquarePosition: newPosition,
      movesCount,
      greenSquaresCount,
      gameFinished,
    });
  }
  render() {
    let { gameStarted, gameFinished } = this.state;
    if (!gameStarted) {
      return (
        <Form
          {...this.state}
          handleChange={(e) => this.handleChange(e)}
          handleSubmit={(e) => this.handleSubmit(e)}
        />
      );
    } else {
      if (!gameFinished)
        return (
          <Board {...this.state} handleKeyDown={(e) => this.handleKeyDown(e)} />
        );
      else return <ScorePanel reset={() => this.reset()} {...this.state} />;
    }
  }
}

export default App;
