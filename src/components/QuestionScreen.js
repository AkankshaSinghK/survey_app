import React, { useState } from "react";
import { saveAnswers, getAnswers } from "../utils/localStorage";
import "../App.css";

const QuestionScreen = ({ questions, sessionId, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(getAnswers(sessionId) || {});

  const handleAnswerChange = (e) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: e.target.value,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitSurvey = () => {
    saveAnswers(sessionId, answers);
    onComplete();
  };

  const renderRatingOptions = (scale) => {
    let options = [];
    for (let i = 1; i <= scale; i++) {
      options.push(
        <label key={i} className="radio-button">
          <input
            type="radio"
            name={`question-${questions[currentQuestion].id}`}
            value={i}
            checked={answers[questions[currentQuestion].id] === String(i)}
            onChange={handleAnswerChange}
          />
          <span className="radio-number">{i}</span>
        </label>
      );
    }
    return options;
  };

  return (
    <div className="question-screen">
      <h1>Customer Survey</h1>
      <h2 className="question-number">{` ${currentQuestion + 1}/${questions.length}`}</h2>

      {/* Display the question number in front of the question */}
      <p>{`${currentQuestion + 1}. ${questions[currentQuestion].question}`}</p>

      {questions[currentQuestion].type === "rating" ? (
        <div className="radio-group">
          {renderRatingOptions(questions[currentQuestion].scale)}
        </div>
      ) : (
        <textarea
          rows="4"
          value={answers[questions[currentQuestion].id] || ""}
          onChange={handleAnswerChange}
          placeholder="Write your feedback here"
        />
      )}


      <div className="navigation-buttons">
        {currentQuestion > 0 && (
          <button className="pre-btn" onClick={prevQuestion}>Previous</button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button className="next-btn" onClick={nextQuestion}>Next</button>
        ) : (
          <button className="submit" onClick={submitSurvey}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionScreen;
