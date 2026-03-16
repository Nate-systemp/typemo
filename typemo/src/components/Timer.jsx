export default function Timer({ time }) {
  const timerClass = time <= 5 ? "timer danger" : time <= 15 ? "timer warning" : "timer";

  return (
    <div className="timer-section">
      <div>
        <div className={timerClass}>{time}</div>
        <div className="timer-label">seconds</div>
      </div>
    </div>
  );
}