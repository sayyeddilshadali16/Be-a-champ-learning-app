import React, { useState } from 'react';
import './Quiz.css';
import { resultInitalState } from '../../Data/Data';

const Quiz6 = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false); 
    }
  }

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev =>
      answer ? {
        ...prev,
        score: prev.score + 5,
        correctAnswers: prev.correctAnswers + 1,
      } : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }
    ))
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  }

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  }

  return (
    <div className='quiz-container'>
      <h1>JavaScript Interview Questions</h1>
      {!showResult ? (<div>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-question">/{questions.length}</span>
        <h4>{question}</h4>
        <ul>
          {choices.map((answer, index) => (
            <li
              key={answer}
              onClick={() => { onAnswerClick(answer, index) }}
              className={answerIdx === index ? 'selected-answer' : null}>{answer}</li>
          ))}
        </ul>
        <div className="quiz-bottom">
          <button
            onClick={onClickNext}
            disabled={answerIdx === null} >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}</button>
        </div>
      </div>) : (<div className='result'>
        <h3>Result</h3>
        <p>Total Questions: <span>{questions.length}</span></p>
        <p>Total Score: <span>{result.score}</span></p>
        <p>Correct Answers: <span>{result.correctAnswers}</span></p>
        <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
        <button onClick={onTryAgain} >Try Again</button>
      </div>)}
    </div>
  )
}

export default Quiz6