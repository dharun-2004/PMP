import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Quiz from './pages/Quiz';

function HomePage() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our quiz app! We're here to help you learn JavaScript in a fun way.</p>
      <button onClick={handleStartQuiz}>Start JavaScript Quiz</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
