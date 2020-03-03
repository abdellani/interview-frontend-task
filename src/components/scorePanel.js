import React from 'react';

const ScorePanel = ({ movesCount,reset }) => <div className='score-panel'>
Game over.
<br/>
Total moves to save princess: {movesCount}
<br/>
<button onClick={reset}>
  Restart the game
</button>
</div>;

export default ScorePanel;
