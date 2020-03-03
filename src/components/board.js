import React from 'react';
import Square from './square';

const Board = ({ height, width, squares, handleKeyDown }) => {
  return (
    <div
      className='board'
      style={{ width: `${width * 50}px`, heigh: `${height * 50}px` }}
      tabIndex='0'
      onKeyDown={(e) => handleKeyDown(e)}
    >
      {squares.map((square, index) => (
        <Square key={index} green={square === 1} red={square === 2} />
      ))}
    </div>
  );
};

export default Board;
