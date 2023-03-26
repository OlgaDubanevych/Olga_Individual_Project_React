import React, { useState } from 'react';

function QuestionForms() {
  const [questionText, setQuestionText] = useState('');
  const [questionCategory, setQuestionCategory] = useState('Other');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? setQuestionCategory(checked) : setQuestionCategory(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Question text: ${questionText}`);
    console.log(`Question category: ${questionCategory}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="questionText"
        value={questionText}
        placeholder="Type your question here"
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <h3>{questionText}</h3>

      <br />
      <label>Please select your question category </label>
      <p></p>
      <select
        value={questionCategory}
        placeholder="Choose your question category"
        onChange={handleChange}
        name="questionCategory"
      >
        <option value="Job Search/Career">Job Search/Career</option>
        <option value="Immigration">Immigration</option>
        <option value="Education - College/University"> Education - College/University</option>
        <option value="Education - High School/Daycare"> Education - High School/Daycare</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Family/Relationships">Family/Relationships</option>
        <option value="Real Estate"> Real Estate/ Rent</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default QuestionForms;

