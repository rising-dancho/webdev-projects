import React from 'react';

function ScoreWidget(props) {
  return (
    <>
      <div>Score: {props.points}</div>
      <div>Passed: {props.points >= props.passing ? 'passed' : 'failed'}</div>
    </>
  );
}

export default ScoreWidget;
