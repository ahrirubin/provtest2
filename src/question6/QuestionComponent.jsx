import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "./questionSlice";

export default function QuestionComponent() {
  const [questionText, setQuestionText] = useState();
  const dispatch = useDispatch();

  function handleSend() {
    dispatch(setQuestion(questionText));
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuestionText(e.target.value)}
      ></input>
      <button onClick={handleSend}>Skicka</button>
    </div>
  );
}
