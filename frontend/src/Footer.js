import React from "react";
import { Link } from "react-router-dom";
import "./App.css";


function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="logo">Mario's Pizza</div>
          <div className="info">
            <p>Location: 2100 E NASA Pkwy, Seabrook, TX 77586</p>
            <p>Open: Monday-Saturday (11:00am-10:00pm)</p>
            <p>Contact: (888) 777-4444</p>
          </div>
          <div className="social">
            <a href="/" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="copyright">
            <p>
              <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
              2020 Tech-Warriors Group Project. No rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
