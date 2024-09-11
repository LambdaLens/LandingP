// import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.svg";
import abstractShapes from "../../assets/abstract-shapes.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__column">
        <h1 className="h1 hero__heading">
          <span className="hero__heading-gradient">LamdaLens</span>
          performance metric{" "}
          <span className="hero__heading-gradient">AWS Lambda serverless</span>
          and AI Integrated
        </h1>
        <p className="text-reg hero__subheading">
          Experience the only open source with all in one place to transform
          your AWS serverless workflow
        </p>
        <div className="hero__input-container">
          <input
            className="hero__input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="text-reg hero__submit">
            NewsLetter
            <img className="hero__arrow" src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      {/* <div className="hero__column">
        <img
          className="hero__graphic"
          src={abstractShapes}
          alt="abstract shapes"
        />
      </div> */}
    </section>
  );
};

export default Hero;
