import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Intro from '../Questions/Text';
import Questions from '../Questions/Questions';
import Search from '../Questions/QuestionSearch/QuestionSearch';
import DiscussionImage from '../Questions/DiscussionImage';
import QuestionForms from '../Questions/QuestionForms';

const DiscussionPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleQuestionSubmit = async (question) => {
    try {
      await axios.post('http://localhost:8080/questions/add', question);
      fetchQuestions(); // Fetch the updated list of questions
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div className="content">
      <Intro />
      <Questions questions={questions} />
      <Search />
      <DiscussionImage />
      <div className="question-form-container">
        <QuestionForms onQuestionSubmit={handleQuestionSubmit} />
      </div>
    </div>
  );
};

export default DiscussionPage;
