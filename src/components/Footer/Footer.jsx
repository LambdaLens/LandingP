// import React from "react";
import "./Footer.css";
import logo from "../../assets/lambdaWhite.png";
// import arrow from "../../assets/colored-arrow.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content-left">
          <div className="footer__company-container">
            <img className="footer__logo" src={logo} alt="icon" />
            <h2 className="footer__company">LambdaLens</h2>
          </div>
          <div className="footer__input-container">
            {/* <input
              className="footer__input"
              type="email"
              placeholder="Enter email"
            />
            <img className="footer__input-icon" src={arrow} alt="arrow" /> */}
          </div>
        </div>
        <div className="footer__content-right">
          <div className="footer__link-col">
            <a href="https://www.linkedin.com/company/lambdalens/"
             className="text-reg footer__col-heading">About Us</a>
            {/* <a href="#" className="text-small footer__link">
              About
            </a>
            <a href="#" className="text-small footer__link">
              Features
            </a>
            <a href="#" className="text-small footer__link">
              Pricing
            </a>
            <a href="#" className="text-small footer__link">
              Integrations
            </a>
            <a href="#" className="text-small footer__link">
              FAQs
            </a> */}
          </div>
          <div className="footer__link-col">
            <a href="https://medium.com/@erinlee12000/introducing-lambda-lens-a-better-way-to-observe-and-optimize-aws-lambda-performance-2fad2c2184a1" 
            className="text-reg footer__col-heading">Blog</a>
            {/* <a href="#" className="text-small footer__link">
              Our Story
            </a>
            <a href="#" className="text-small footer__link">
              Team
            </a>
            <a href="#" className="text-small footer__link">
              Careers
            </a>
            <a href="#" className="text-small footer__link">
              Press
            </a>
            <a href="#" className="text-small footer__link">
              Contact Us
            </a> */}
          </div>
          <div className="footer__link-col">
            <a href="https://www.linkedin.com/company/lambdalens/"
            className="text-reg footer__col-heading">Connect With Us!</a>
          </div>
        </div>
      </div>
      <div className="footer__banner">
        <p className="text-small footer__copywright">
          @2024 Lambda Lens. All Rights Reserved.
          <a
            href=""
            className="underline"
            target="_blank"
          >
          </a>
        </p>
        <div className="footer__external-links">
          <a href="https://www.linkedin.com/company/lambdalens/" className="footer__external-link linkedin"></a>
          <a href="https://x.com/"className="footer__external-link twitter"></a>
          <a href="https://www.youtube.com/" className="footer__external-link youtube"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
