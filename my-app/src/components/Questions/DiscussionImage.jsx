import React from "react";
import './ImageDiscussionBoard.css'

const DiscussionImage = () => {
    return (
        <div className="discussion_image">
            <img
                src={require('./Images/group discussion.png')}
                className="discussion_image__img"
            />
        </div>
    )
};

export default DiscussionImage;
