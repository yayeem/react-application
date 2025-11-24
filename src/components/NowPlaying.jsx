import React, { useState, useEffect } from "react";
import "./NowPlaying.css";
import MovieCard from "./MovieCard";

const NowPlaying = () => {
  //state variable
  // do this after fetching the data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // this is a custom function that will get the movies from TMDB

    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=5a23ff06dc7f9e6d0874a57383daeb52"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  // https://api.themoviedb.org/3/movie/now_playing?api_key=5a23ff06dc7f9e6d0874a57383daeb52
  return (
    <div className="nowPlaying_grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default NowPlaying;