import { useRef, useEffect } from "react";

export default function WordDisplay({ text, input, isFocused }) {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  // Scroll the container to keep the cursor visible
  useEffect(() => {
    if (cursorRef.current && containerRef.current) {
      const container = containerRef.current;
      const cursor = cursorRef.current;

      const cursorTop = cursor.offsetTop;
      const lineHeight = cursor.offsetHeight;
      // Keep one line of padding above the current line
      const targetScroll = cursorTop - lineHeight;

      if (targetScroll > 0) {
        container.scrollTo({
          top: targetScroll,
          behavior: "smooth"
        });
      }
    }
  }, [input]);

  return (
    <div className="word-display-wrapper">
      <div
        ref={containerRef}
        className={`word-display${isFocused ? " focused" : ""}`}
      >
        {text.split("").map((char, index) => {
          let className = "char";
          const isCursor = index === input.length;

          if (index < input.length) {
            className += char === input[index] ? " correct" : " incorrect";
          } else if (isCursor) {
            className += " current cursor";
          }

          return (
            <span
              key={index}
              ref={isCursor ? cursorRef : null}
              className={className}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}