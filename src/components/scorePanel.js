import React from 'react';

const ScorePanel = ({ movesCount, reset }) => (
  <div className='score-panel'>
    <div>
      Game over.
      </div>
      <div>
      Total moves to save princess: {movesCount}
      </div>
      <button onClick={reset}>Restart the game</button>
  
  </div>
);

export default ScorePanel;
