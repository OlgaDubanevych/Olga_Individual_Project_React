import React, { useState } from 'react';
import './login.css';

function LogIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleClick = () => {
      setIsLoggedIn(prevState => !prevState);
    };
  
    const buttonText = isLoggedIn ? 'Log Out' : 'Log In';
    const displayText = isLoggedIn ? 'You are Logged In' : 'You are Logged out';
  
    return (
        <div className='login'>
        <div className='button-container'>
          <button className='button' onClick={handleClick}>{buttonText}</button>
        </div>
        <h4>{displayText}</h4>
      </div>
    );
  }
  
  export default LogIn;