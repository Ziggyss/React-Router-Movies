import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Movie = props => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    console.log("Id console log " + id);

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard
        key={movie.id}
        title={title}
        director={director}
        metascore={metascore}
        stars={stars}
      />
      <div onClick={saveMovie} className="save-button">
        Save
      </div>
    </div>
  );

  /* const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>
  ); */
};

export default Movie;
