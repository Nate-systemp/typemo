import { useState, useCallback } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import TypingArea from "./components/TypingArea";
import WordDisplay from "./components/WordDisplay";
import Results from "./components/Results";

import useTimer from "./hooks/useTimer";
import useTypingLogic from "./hooks/useTypingLogic";

import { generateWords } from "./utils/generateText";

function App() {
  const [text, setText] = useState(generateWords());
  const [isFocused, setIsFocused] = useState(false);

  const {
    input,
    handleChange,
    correctChars,
    totalChars,
    accuracy,
    isTyping,
    reset: resetTyping
  } = useTypingLogic(text);

  const { time, reset: resetTimer } = useTimer(isTyping);

  const isFinished = time === 0;

  const handleRestart = useCallback(() => {
    setText(generateWords());
    resetTyping();
    resetTimer();
  }, [resetTyping, resetTimer]);

  return (
    <div className="app">
      <Navbar />

      <div className="test-container">
        <Timer time={time} />

        <WordDisplay text={text} input={input} isFocused={isFocused} />

        <TypingArea
          input={input}
          handleChange={handleChange}
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {!isFinished && input.length > 0 && (
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-value">{accuracy}%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{correctChars}</span>
              <span className="stat-label">Correct</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{totalChars - correctChars}</span>
              <span className="stat-label">Errors</span>
            </div>
          </div>
        )}
      </div>

      {isFinished && (
        <Results
          correctChars={correctChars}
          totalChars={totalChars}
          time={time}
          accuracy={accuracy}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
