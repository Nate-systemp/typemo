export default function Results({ correctChars, totalChars, time, accuracy, onRestart }) {
  const minutes = (60 - time) / 60;
  const wpm = minutes > 0 ? Math.round((correctChars / 5) / minutes) : 0;

  return (
    <div className="results-overlay">
      <div className="results">
        <h2>Test Complete</h2>
        <div className="results-wpm">{wpm}</div>
        <div className="results-wpm-label">words per minute</div>

        <div className="results-stats">
          <div className="results-stat">
            <span className="value">{accuracy}%</span>
            <span className="label">Accuracy</span>
          </div>
          <div className="results-stat">
            <span className="value">{correctChars}</span>
            <span className="label">Correct</span>
          </div>
          <div className="results-stat">
            <span className="value">{totalChars - correctChars}</span>
            <span className="label">Errors</span>
          </div>
        </div>

        <div className="results-actions">
          <button className="btn-restart" onClick={onRestart}>
            ↻ Try Again
          </button>
        </div>
      </div>
    </div>
  );
}