// import React from "react";
import "./App.css";
//images
// import doubleQoute from "../../assets/double-quote.svg";

// fonts
import "../../fonts/fonts.css";
// components
import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
// import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Video from "../Video/Video";
import FAQ from "../FAQ/FAQ";
// import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";
import Navigation from "../Navigation/Navigation";
import Team from "../Team/Team";
// import Pricing from "../Pricing/Pricing";

const App = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        {/* This Hero is Intelligent CloudBased note below the NavBar */}
        <Hero />
      </Header>
      {/* this Logo is continuous running company logos */}
      <Logos /> 
      <Features />
      {/* <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img className="testimonial__quotes" src={doubleQoute} alt="quote" />
      </Testimonial> */}

      {/* Place your Tutorial video here */}
        <Video />
        {/* <Pricing /> */}
      <FAQ>
        <Accordion />
      </FAQ>
      {/* <CTA /> */}
      <Team />
      <Footer />
    </Page>
  );
};

export default App;
