import React from "react";
import PropTypes from 'prop-types';
import "./AccordionItem.css";
// import arrow from "../../assets/colored-arrow.svg";
import arrowRight from "../../assets/colored-arrow-right.svg";

const AccordionItem = ({ item, setOpenQuestion, openQuestion }) => {
  const { question, answerHeading, answer, id } = item;

  const open = openQuestion === id;

  const handleQuestionClick = (id) => {
    openQuestion === id ? setOpenQuestion(-1) : setOpenQuestion(id);
  };

  return (
    <div className="accordion-item">
      <button
  className={`accordion-item__bar ${open ? 'open' : ''}`} 
  onClick={() => handleQuestionClick(id)}
>
  <p className="text-med accordion-item__question">{question}</p>
  <img
    className="accordion-icon accordion-item__answer-icon"
    src={arrowRight} 
    alt="arrow"
  />
</button>
      <div className={`accordion-item__answer ${open ? "visible" : ""}`}>
        <div className="accordion-item__heading-container">
          <p className="text-med accordion-item__answer-heading">
            {answerHeading}
          </p>
          {/* <img
            className="accordion-icon accordion-item__answer-icon"
            src={arrowRight}
            alt="arrow"
          /> */}
        </div>
        <p className="text-reg accordion-item__answer-description">
          {answer.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  item: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answerHeading: PropTypes.string,
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setOpenQuestion: PropTypes.func.isRequired,
  openQuestion: PropTypes.number.isRequired,
};

export default AccordionItem;
