import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
 
 export const HeroImg = () => {
   return (
   <div className="hero">
      <div className="mask">
        <img className="into-img" src=
        {IntroImg} alt="IntroImg"/>

      </div>
      <div className="content">
        <p>I'm a growing developer</p>
        <h1> MERN STACK!</h1>
        <div>
            <Link to="/About" className="btn">ASHNA T</Link>
        </div>

      </div>

    </div>

   );
 };

 export default HeroImg;
 