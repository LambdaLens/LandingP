// import React from "react";
import "./Footer.css";
import LLcircle from "../../assets/LLcircle.png";
import arrow from "../../assets/colored-arrow.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content-left">
          <div className="footer__company-container">
            <img className="footer__logo" src={LLcircle} alt="icon" />
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
            <p className="text-reg footer__col-heading">About Us</p>
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
            <p className="text-reg footer__col-heading">Blog</p>
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
            <p className="text-reg footer__col-heading">Connect With Us!</p>
          </div>
        </div>
      </div>
      <div className="footer__banner">
        <p className="text-small footer__copywright">
          @2024 SmartNotes. All Rights Reserved.
          <a
            href=""
            className="underline"
            target="_blank"
          >
          </a>
        </p>
        <div className="footer__external-links">
          <button className="footer__external-link facebook"></button>
          <button className="footer__external-link linkedin"></button>
          <button className="footer__external-link twitter"></button>
          <button className="footer__external-link youtube"></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
