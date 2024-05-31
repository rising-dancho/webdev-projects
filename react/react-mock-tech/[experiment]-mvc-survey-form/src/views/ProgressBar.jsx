import React from 'react';

function ProgressBar({ step, totalSteps }) {
  const progress = ((step / totalSteps) * 100).toFixed(2);
  return (
    <div
      className="progress-bar"
      style={{ width: '100%', backgroundColor: '#e0e0df' }}
    >
      <div style={{ width: `${progress}%`, backgroundColor: '#76c7c0' }}>
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
