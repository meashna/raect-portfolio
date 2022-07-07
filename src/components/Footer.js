import "./FooterStyles.css";

import React from 'react';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk ,FaPhone, FaTwitter} from "react-icons/fa";





const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:
                    "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p> Address</p>
                        <p>Detailed Address</p>
                    </div>
                </div>
                <div className="phone">
                 <h4><FaPhone size={20} style={{color:
                 "#fff", marginRight:"2rem"}}/>
                 123 333 333</h4>
                </div>
    
                <div className="email">
                 <h4><FaMailBulk size={20} style={{color:
                 "#fff", marginRight:"2rem"}}/>
                 info@gmail.com</h4>    
                </div>
                

            </div>
            <div className="right">
                <h4>About something we need to mention</h4>
                <p> Here we can add something brief we need to mention.And can change the font style and font colour.  </p>
                <div className="social">
                    <FaTwitter
                    size={30} 
                    style={{color:
                    "#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:
                    "#fff", marginRight:"1rem"}}/>
                    <FaInstagram size={30} style={{color:
                    "#fff", marginRight:"1rem"}}/>
                </div>
                
            </div>         

        </div>

    </div>
  )
}

export default Footer