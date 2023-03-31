import React, { useState } from 'react';
import './SearchBar/Questions.json'
import './Questions.css'
import questionsData from "./SearchBar/Questions.json";


const CommentForm = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <form className = "text" onSubmit={handleCommentSubmit}>
      <p></p>
      <label htmlFor="comment">Leave your comment:</label>
      <p></p>
      <textarea
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <p></p>
      <button className = "text "type="submit">Submit</button>
    </form>
  );
};

const Comments = ({ comments }) => {
  return (
    <div className='text'>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
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
    <div className = "text">
      <h2>{question.question_category}: {question.question_topic}</h2>
      <p>{question.question_text}</p>
      <button className = 'text 'onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
      <h3>Comments:</h3>
      <Comments comments={comments} />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
};

const Questions = () => {
  const [likedCount, setLikedCount] = useState(0);

  const handleLike = (isLiked) => {
    setLikedCount(likedCount + (isLiked ? 1 : -1));
  };

  return (
    <div classsName = "text">
      {questionsData.map((question, index) => (
        <Question key={index} question={question} onLike={handleLike} />
      ))}
      <h3 className='text'>Total Liked Questions: {likedCount}</h3>
    </div>
  );
};

export default Questions;
