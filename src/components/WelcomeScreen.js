import React from "react";
import "../App.css";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Our Customer Survey</h1>
      <p>Please take a moment to provide your feedback.</p>
      <button onClick={onStart}>Start Survey</button>
    </div>
  );
};

export default WelcomeScreen;
