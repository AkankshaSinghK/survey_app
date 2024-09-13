import React, { useEffect } from 'react';
import '../App.css';

const ThankYouScreen = ({ onRestart }) => {
  useEffect(() => {
    const timer = setTimeout(onRestart, 5000);
    return () => clearTimeout(timer);
  }, [onRestart]);

  return (
    <div className="thank-you-screen">
      <h1>Thank You for Your Feedback!</h1>
      <p>We appreciate your time.</p>
      <p>The survey will restart in 5 seconds...</p>
    </div>
  );
};

export default ThankYouScreen;
