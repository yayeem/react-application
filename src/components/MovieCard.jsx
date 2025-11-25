import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  //the YEAR is the first four characters in the release date string
  const yearNum = movie.release_date.slice(0, 4);

  //the MONTH starts AFTER the 5th character and goes to the 7th in the release date string
  const monthNum = movie.release_date.slice(5, 7);

  //the DAY starts AFTER the 8th character and goes to the 10th in the release date string
  const dayNum = movie.release_date.slice(8, 10);

  const months = [
    { id: "01", month: "January" },
    { id: "02", month: "February" },
    { id: "03", month: "March" },
    { id: "04", month: "April" },
    { id: "05", month: "May" },
    { id: "06", month: "June" },
    { id: "07", month: "July" },
    { id: "08", month: "August" },
    { id: "09", month: "September" },
    { id: "10", month: "October" },
    { id: "11", month: "November" },
    { id: "12", month: "December" },
  ];

  const movieMonthResults = months.find((month) => month.id === monthNum);

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie Poster"
      />
      <div className="movie-details">
        <h3 className="movie-details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p className="release_date">
            {movieMonthResults.month} {dayNum}, {yearNum}
          </p>
        </div>

        <p classnName="movie-description:">
          {movie.overview.slice(0, 200) + "..."}{" "}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
