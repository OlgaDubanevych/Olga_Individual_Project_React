import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
    <footer className="footer">
      
        <div className="email"> Email: communitysupport@gmail.com </div>

        <div className ="social_media_images">
            <img src = {require('./Images/instagram.png')} style = {{width:40, height:41}}/>
            <img src= {require('./Images/facebook.png')} style = {{width:40, height:41}}/> 
            <img src = {require('./Images/youtube.jpg')}style = {{width:40, height:41}}/>
        </div>
  </footer>  );
};
export default Footer