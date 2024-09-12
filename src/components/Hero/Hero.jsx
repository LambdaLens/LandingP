// import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.svg";
import abstractShapes from "../../assets/abstract-shapes.png";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__column">
        <h1 className="h1 hero__heading">
          <span className="hero__heading-gradient">Lambda Lens </span>
          AWS Lambda Insights{" "}
          <span className="hero__heading-gradient">Simplified Metrics for </span>
          Cold Start Optimization
        </h1>
        <p className="text-reg hero__subheading">
        Reimagine your AWS Lambda experience with a unified view of all your Lambda metrics.
        </p>

      </div>
      <div className="hero__column">
        {/* <img
          className="hero__graphic"
          src={abstractShapes}
          alt="abstract shapes"
        /> */}
        <div className="spline-container">
          
          <Spline
            // scene="https://prod.spline.design/Vy4HK1Imv245iDKK/scene.splinecode"
            scene="https://prod.spline.design/Vy4HK1Imv245iDKK/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
