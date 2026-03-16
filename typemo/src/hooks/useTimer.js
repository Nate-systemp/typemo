import { useState, useEffect, useCallback } from "react";

export default function useTimer(isTyping, duration = 60) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (!isTyping) return;

    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTyping]);

  const reset = useCallback(() => {
    setTime(duration);
  }, [duration]);

  return { time, reset };
}