import {useCallback, useState} from "react";
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');
  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState('answered');
      setUserAnswers(prevAnswer => ([...prevAnswer, selectedAnswer]));
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct')
        } else {
          setAnswerState('wrong');
        }
        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000)
    }, [activeQuestionIndex]);

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
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}