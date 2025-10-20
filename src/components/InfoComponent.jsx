import React from "react";
import PropTypes from "prop-types"; 

const InfoComponent = ({ title, year }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Year: {year}</p>
    </div>
  );
};


InfoComponent.defaultProps = {
  title: "Untitled",
  year: 2000,
};


InfoComponent.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
};

export default InfoComponent;
