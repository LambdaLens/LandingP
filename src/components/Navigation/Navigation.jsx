import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.svg";
import navigationArrow from "../../assets/arrow.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo-section">
        <img className="navigation__logo" src={logo} alt="Logo" />
        <h3 className="navigation__name">SmartNotes</h3>
      </div>
      <ul className="navigation__link-section">
        <a href="#" className="navigation__link">
          Features
        </a>
        <a href="#" className="navigation__link">
          Pricing
        </a>
        <a href="#" className="navigation__link">
          Support
        </a>
      </ul>
      <button className="navigation__cta">
        Get Started
        <img src={navigationArrow} alt="Arrow" className="navigation__arrow" />
      </button>
    </nav>
  );
};

export default Navigation;
