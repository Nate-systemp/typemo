import { useRef, useEffect } from "react";

export default function TypingArea({ input, handleChange, isFocused, onFocus, onBlur }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    // Auto-focus on mount
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <>
      <textarea
        ref={textareaRef}
        value={input}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="typing-area"
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      {!isFocused && (
        <div className="click-prompt" onClick={handleClick}>
          Click here or press any key to start typing
        </div>
      )}
    </>
  );
}