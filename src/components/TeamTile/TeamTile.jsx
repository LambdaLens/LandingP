import React from "react";
import PropTypes from "prop-types";
import "./TeamTile.css";

const TeamTile = ({ name, picture, linkedin, github }) => {
  return (
    <div className="team-tile">
      <img className="team-tile__picture" src={picture} alt={name} />
      <h4 className="team-tile__name">{name}</h4>
      <div className="team-tile__socials">
        <a href={linkedin} className="team-tile__social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={github} className="team-tile__social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

// Define prop types
TeamTile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default TeamTile;