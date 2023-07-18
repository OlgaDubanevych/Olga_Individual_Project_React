import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Question = ({ question, onLike }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(question.comments || []); // Ensure comments is initialized as an array

  const handleLike = () => {
    setLiked(!liked);
    onLike(!liked);
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="question-container">
      <h3 className="text">{question.question_category}</h3>
      <h4 className="text">{question.question_topic}</h4>
      <p className="question-text">{question.question_text}</p>
      <div className="like-comment-container">
        <button onClick={handleLike} className={`like-button ${liked ? 'liked' : ''}`}>
          <span className="like-icon">{liked ? '👍' : '👍'}</span>
          <span className="like-text text">{liked ? 'Liked' : 'Like'}</span>
        </button>
        <h4 className="comment-header text">Comments:</h4>
      </div>
      {/* Render comments */}
      <Comments comments={comments} />
      <hr />
    </div>
  );
};

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <p key={index} className="comment-text">
          <span className="bullet-point">&#8226;</span> {comment}
        </p>
      ))}
    </div>
  );
};

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/questions', {
        headers: { 'x-response-type': 'template' },
      });
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(response.data, 'text/html');
      const rows = Array.from(htmlDocument.querySelectorAll('tr')).slice(1);
      const fetchedQuestions = rows.map((row) => {
        const [postedBy, category, topic, text, date] = Array.from(row.querySelectorAll('td')).map((cell) =>
          cell.textContent.trim()
        );
        return {
          posted_by: postedBy,
          question_category: category,
          question_topic: topic,
          question_text: text,
          question_posting_date: date,
          comments: [] // Add a sample comments array here
        };
      });
      setQuestions(fetchedQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div>
      <h1 className="questions-header">Questions</h1>
      <hr />
      <div className="questions-container">
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={index}>
              <Question question={question} />
              {index !== questions.length - 1 && <hr />}
            </div>
          ))
        ) : (
          <p>Loading questions...</p>
        )}
      </div>
    </div>
  );
};

export default Questions;
