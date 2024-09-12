// import React from "react";
import "./Navigation.css";
// import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/lambdaWhite.png"

const Navigation = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/oslabs-beta/Lambda-Lens', '_blank', 'noopener,noreferrer');
  }
  return (
    <nav className="navigation">
      <div className="navigation__logo-section">
        {/* smartLOGO replace with lambdalens logo */}
        <img className="navigation__logo" src={logo} alt="logo" />
        <h3 className="navigation__name">Lambda Lens</h3>
      </div>
      <ul className="navigation__link-section">
        <a href="https://medium.com/@erinlee12000/introducing-lambda-lens-a-better-way-to-observe-and-optimize-aws-lambda-performance-2fad2c2184a1" className="text-reg navigation__link">
          Blog
        </a>
        <a href="https://www.linkedin.com/company/lambdalens/" className="text-reg navigation__link">
          About Our Team
        </a>
      </ul>
      <button onClick={handleGitHubClick}className="text-reg navigation__cta">
        GitHub
        <img className="navigation__arrow" src={arrow} alt="arrow" />
      </button>
    </nav>
  );
};

export default Navigation;
