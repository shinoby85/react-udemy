import {useState} from "react";
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;
  
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevAnswer => ([...prevAnswer, selectedAnswer]));
  }
  
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