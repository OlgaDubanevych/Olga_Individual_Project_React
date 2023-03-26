import React from 'react';

function QuestionCategory(props) {
  const { questionCategory, handleChange } = props;

  return (
    <>
      <label>Please select your question category </label>
      <p></p>
      <select
        value={questionCategory}
        placeholder="Choose your question category"
        onChange={handleChange}
        name="questionCategory"
      >
        <option value="">All</option>
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
    </>
  );
}

export default QuestionCategory;
