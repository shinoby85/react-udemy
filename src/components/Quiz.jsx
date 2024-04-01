import {useCallback, useState} from "react";
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";

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
  
  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);
  
  return (
    <div id="quiz">
      <div id='questuon'>
        <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswer.map((answer, index) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}