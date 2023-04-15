import React from "react";
import './Image1.css'

const ImmigrationImage1 = () => {
    return (
        <div className="image-display">
            <img
                src={require('./Images/approved.png')}
                className="image1"
            />
        </div>
    )
};

export default ImmigrationImage1;