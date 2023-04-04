import React, { useState } from 'react';
import './SearchBar/Questions.json';
import './Questions.css';
import questionsData from './SearchBar/Questions.json';

const CommentForm = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <textarea
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        className="input-box text"
        placeholder="Leave your comment"
      />
      <br />
      <p></p>
      <button type="submit" className="submit-button text">Submit</button>
    </form>
  );
};

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <p key={index} className="comment-text text">
          <span className="bullet-point">&#8226;</span> {comment}
        </p>
      ))}
    </div>
  );
};

const Question = ({ question, onLike }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(question.comments);

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
      <p className="question-text text">{question.question_text}</p>
      <div className="like-comment-container">
        <button onClick={handleLike} className={`like-button ${liked ? 'liked' : ''}`}>
          <span className="like-icon">{liked ? '👍' : '👍'}</span>
          <span className="like-text text">{liked ? 'Liked' : 'Like'}</span>
        </button>
        <h4 className="comment-header text">Comments:</h4>
      </div>
      <Comments comments={comments} />
      <div className="comment-form-container">
        <CommentForm onCommentSubmit={handleCommentSubmit} />
      </div>
      <hr />
    </div>
  );
};

const Questions = () => {
  const [likedCount, setLikedCount] = useState(0);

  const handleLike = (isLiked) => {
    setLikedCount(likedCount + (isLiked ? 1 : -1));
  };

  return (
    <div>
      <h1 className="questions-header text">Questions</h1>
      <hr />
      <div className="questions-container">
        {questionsData.map((question, index) => (
          <div key={index}>
            <Question question={question} onLike={handleLike} />
            {index !== questionsData.length - 1 && <hr />}
          </div>
        ))}
      </div>
      <hr />
      <h3 className='liked-count-text text'> Liked Questions: {likedCount}</h3>
    </div>
  );
};

export default Questions;
