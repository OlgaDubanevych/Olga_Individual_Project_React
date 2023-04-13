import { useState, useEffect } from 'react';
import './QuestionForms.css'

function QuestionForms() {
  const [questionText, setQuestionText] = useState('');
  const [questionCategory, setQuestionCategory] = useState('Other');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { value, type, checked } = event.target;
    type === 'checkbox' ? setQuestionCategory(checked) : setQuestionCategory(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(`Question text: ${questionText}`);
    console.log(`Question category: ${questionCategory}`);
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  }, [submitted]);

  return (
    
    <form className="text" onSubmit={handleSubmit}>
      <p></p>
      <h1 className="text-post">Ask Your Question: </h1>
      <p></p>
      <textarea
        className="text"
        type="text"
        name="questionText"
        value={questionText}
        placeholder="Type your question here"
        onChange={(e) => setQuestionText(e.target.value)}
      />
      

      <br />
      <label className="text">Please select your question category </label>
      <p></p>
      <select
        className="text"
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
        <button className="text-submit" type="submit">
          Submit
        </button>
      </p>
      {submitted && (
        <p>Your question was submitted and is awaiting administrator's approval to be posted.</p>
      )}
    </form>
  );
}

export default QuestionForms;