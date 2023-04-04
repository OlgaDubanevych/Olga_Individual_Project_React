import React, { useState } from 'react';
import './login.css';
import Switch from '@mui/material/Switch';

function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSwitch = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  const loginStatus = isLoggedIn ? 'Logged In' : 'Logged Out';

  return (
    <div className="login">
      <div className="switch-container">
        <Switch checked ={isLoggedIn} onChange={handleSwitch}/>
        <span className="switch-label">{loginStatus.replace(/(\b\w)/gi, c => c.toUpperCase())}</span>
      </div>
    </div>
  );
}

export default LogIn;

