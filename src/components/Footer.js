import "./FooterStyles.css";

import React from "react";
import{FaHome , FaPhone , FaMailBulk} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> Address</p>
              <p>Cheriyapushpamangalathu Venchempu,Kollam,Kerala.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8606542678
            </h4>
          </div>

          <div className="email">
          
            <h4>
            <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            
             cs25ashn@kmeacollege.ac.in
            </h4>

          </div>

  

        </div>
        <div className="right">
          <h4>Hola peeps!😍</h4>
          <p>
            {" "}
            Its a beginner friendly react-website made from scratch.I am build
            it with the help of some resources and proper mentoring from the
            experts in this field.I feel so proud of myself for building these.{" "}
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/ashnat/ "
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href=" https://github.com/meashna"
              className="github social"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href=" https://twitter.com/ashnat__?t=D0bvum4O9W6dqqD1MjAKDA&s=09 "
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://instagram.com/ashnat___?igshid=YmMyMTA2M2Y="
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
