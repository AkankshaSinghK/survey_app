// Save answers to local storage
export const saveAnswers = (sessionId, answers) => {
  localStorage.setItem(sessionId, JSON.stringify(answers));
};

// Get answers from local storage
export const getAnswers = (sessionId) => {
  return JSON.parse(localStorage.getItem(sessionId)) || {};
};

// Generate a unique session ID for each customer
export const generateSessionId = () => {
  return "session-" + Date.now();
};

// Mark the survey as completed
export const markAsCompleted = (sessionId) => {
  const answers = getAnswers(sessionId);
  answers.completed = true;
  saveAnswers(sessionId, answers);
};
