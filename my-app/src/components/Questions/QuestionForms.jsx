import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForms.css';

const QuestionForms = () => {
  const [questionText, setQuestionText] = useState('');
  const [questionCategory, setQuestionCategory] = useState('');
  const [questionTopic, setQuestionTopic] = useState('');
  const [questionPostingDate, setQuestionPostingDate] = useState('');
  const [postedBy, setPostedBy] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'questionText':
        setQuestionText(value);
        break;
      case 'questionCategory':
        setQuestionCategory(value);
        break;
      case 'questionTopic':
        setQuestionTopic(value);
        break;
      case 'questionPostingDate':
        setQuestionPostingDate(value);
        break;
      case 'postedBy':
        setPostedBy(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/questions/add', {
        question_text: questionText,
        question_category: questionCategory,
        question_topic: questionTopic,
        question_posting_date: questionPostingDate,
        posted_by: postedBy,
      });
      setQuestionText('');
      setQuestionCategory('');
      setQuestionTopic('');
      setQuestionPostingDate('');
      setPostedBy('');
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <form className="text" onSubmit={handleSubmit}>
      <h1 className="text-post">Ask Your Question:</h1>
      <textarea
        className="text"
        type="text"
        name="questionText"
        value={questionText}
        placeholder="Type your question here"
        onChange={handleChange}
      />
      <br />
      <label className="text">Please select your question category</label>
      <select
        className="text"
        value={questionCategory}
        onChange={handleChange}
        name="questionCategory"
      >
        <option value="">Select category</option>
        <option value="Job Search/Career">Job Search/Career</option>
        <option value="Immigration">Immigration</option>
        <option value="Education - College/University">Education - College/University</option>
        <option value="Education - High School/Daycare">Education - High School/Daycare</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Family/Relationships">Family/Relationships</option>
        <option value="Real Estate">Real Estate/ Rent</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <br />
      <input
        className="text"
        type="text"
        name="questionTopic"
        value={questionTopic}
        placeholder="Enter question topic"
        onChange={handleChange}
      />
      <br />
      <input
        className="text"
        type="text"
        name="questionPostingDate"
        value={questionPostingDate}
        placeholder="Enter question posting date"
        onChange={handleChange}
      />
      <br />
      <input
        className="text"
        type="text"
        name="postedBy"
        value={postedBy}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <br />
      <button className="text-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default QuestionForms;
