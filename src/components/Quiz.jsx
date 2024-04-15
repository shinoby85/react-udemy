import {useCallback, useState} from "react";
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;
  
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers(prevAnswer => ([...prevAnswer, selectedAnswer]));
    }, []);
  
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete}/>
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}