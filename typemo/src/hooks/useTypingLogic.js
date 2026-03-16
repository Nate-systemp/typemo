import { useState, useCallback } from "react";

export default function useTypingLogic(text) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = useCallback((e) => {
    const value = e.target.value;

    if (!isTyping) {
      setIsTyping(true);
    }

    // Don't allow typing past the text length
    if (value.length > text.length) return;

    setInput(value);
  }, [isTyping, text]);

  const correctChars = input
    .split("")
    .filter((char, i) => char === text[i]).length;

  const totalChars = input.length;
  const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;

  const reset = useCallback(() => {
    setInput("");
    setIsTyping(false);
  }, []);

  return {
    input,
    handleChange,
    correctChars,
    totalChars,
    accuracy,
    isTyping,
    reset
  };
}