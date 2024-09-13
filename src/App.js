import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ThankYouScreen from './components/ThankYouScreen';
import { questions } from './utils/data';
import { generateSessionId, markAsCompleted } from './utils/localStorage';
import './App.css';

const App = () => {
  const [screen, setScreen] = useState('welcome');
  const [sessionId, setSessionId] = useState(null);

  const handleStart = () => {
    const session = generateSessionId();
    setSessionId(session);
    setScreen('questions');
  };

  const handleComplete = () => {
    markAsCompleted(sessionId);
    setScreen('thankYou');
  };

  const handleRestart = () => {
    setScreen('welcome');
  };

  return (
    <div className="App">
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {screen === 'questions' && (
        <QuestionScreen
          questions={questions}
          sessionId={sessionId}
          onComplete={handleComplete}
        />
      )}
      {screen === 'thankYou' && <ThankYouScreen onRestart={handleRestart} />}
    </div>
  );
};

export default App;
