import { words } from "../data/words";

export function generateText() {
  let result = [];

  for (let i = 0; i < 30; i++) {
    const random = Math.floor(Math.random() * words.length);
    result.push(words[random]);
  }

  return result.join(" ");
}