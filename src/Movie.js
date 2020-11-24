import React from "react";
import PropTypes from "prop-types";
import "./Css/Movie.css";

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div className="movie">
      <img src={poster} alt={id} title={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_summary">{summary}</p>
      </div>
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
