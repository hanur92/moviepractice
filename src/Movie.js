import React from "react";
import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div>
      <div visibility="hidden">{id}</div>
      <h2>{year}</h2>
      <h3>{title}</h3>
      <h4>{summary}</h4>
      <img src={poster} alt={id}></img>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
