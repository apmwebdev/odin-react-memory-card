import React, { FC, useEffect, useState } from 'react';

interface ScoreboardProps {
  selections: number[];
}

const Scoreboard:FC<ScoreboardProps> = (props) => {
  const [highScore, setHighScore] = useState(0);

  // Maybe new high score
  useEffect(() => {
    if (props.selections.length > highScore) {
      setHighScore(props.selections.length);
    }
  }, [props.selections]);

  return (
    <div className='ScoreboardContainer'>
      <div className='Instructions'>
        Welcome to Memory Card! Click on as many images as you can without clicking the same one
        twice.
      </div>
      <div className='Scoreboard'>
        <div className='score'>Score: {props.selections.length}</div>
        <div className='highScore'>High Score: {highScore}</div>
      </div>
    </div>
  );
}

export default Scoreboard;