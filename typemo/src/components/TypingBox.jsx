import { useState, useEffect } from "react";
import { generateText } from "../utils/generateText";

function TypingBox() {

  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setText(generateText());
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <p>{text}</p>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default TypingBox;