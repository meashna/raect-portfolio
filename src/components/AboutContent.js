import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";


import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
            <h1>Who Am I</h1>
            <p>
            I am Ashna T from Kerala , currently pursuing  my BTech Degree in Computer Science under Kerala Technical university.
            I am a learning enthusiast who admire engineering and programming.Now  I  trying  to develop  my skills in MERN stack.
            </p>
            <Link to="/Contact">
            <button className="btn"> Want to connect? </button>
            </Link>
      </div>
      <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="image" />
                </div>
                
            </div>
      </div>
    </div>
  );
};

export default AboutContent;
