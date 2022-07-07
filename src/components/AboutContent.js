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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
               mollit anim id est laborum.
            </p>
            <Link to="/Contact">
            <button className="btn"> CONTACT </button>
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
