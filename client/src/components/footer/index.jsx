import React from "react";
import "./index.css";
import {
  BsFillSendFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import footer from "../../assests/footer.png";
const Footer = () => {
  return (
    <div className="f-container">
      <div className="f-upper">
        <div className="f-left">
          <h4>NO LIMITED ACCESS</h4>
          <h2>Start using ateeshkumar Today</h2>
          <div className="f-input">
            <input type="email" placeholder="Your Email" />
            <button className="f-btn">
              <BsFillSendFill />
            </button>
          </div>
        </div>
        <div className="f-right">
          <img src={footer} alt="Footer" />
        </div>
      </div>
      <div className="f-lower">
        <div className="f-up">
          <div className="up-1">
            <h2>Ateesh kumar</h2>
            <p>Make the right Data Driven Decisions to move your <br /> study fast</p>
          </div>
          <div className="up-2">
            <a href="">HTML</a>
            <a href="">CSS</a>
            <a href="">JavaScript</a>
            <a href="">DSA</a>
          </div>
          <div className="up-3">
            <a href="">Term and Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
          </div>
          <div className="up-4">
            <h4>Let's Chat</h4>
            <p>ateeshkumar.com</p>
            <div className="f-social">
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <BsInstagram />
              </a>
              <a href="">
                <BsTwitter />
              </a>
              <a href="">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="f-down">
          <div className="border-fot"></div>
          <div className="f-down-hr">
          <h3>ateeshkumar&copy;2023</h3>
          <div className="policy">
            <a href="">Term and Condition</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
