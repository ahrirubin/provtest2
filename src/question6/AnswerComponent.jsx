import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAnswer } from "./questionSlice";

export default function AnswerComponent() {
  const question = useSelector((state) => state.question.question);
  const answer = useSelector((state) => state.question.answer);

  const [inputAnswer, setInputAnswer] = useState("");
  const dispatch = useDispatch();

  function handleAnswer() {
    dispatch(setAnswer(inputAnswer));
  }

  return (
    <div>
      <p>Fråga: {question}</p>

      <input
        type="text"
        onChange={(e) => setInputAnswer(e.target.value)}
      ></input>
      <button onClick={handleAnswer}>Svara</button>

      <p>Svar: {answer}</p>
    </div>
  );
}
