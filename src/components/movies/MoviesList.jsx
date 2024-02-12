import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieSlider from './MoviesSlider';

const MoviesList = ({ popularMovies }) => {
  const navigate = useNavigate();

  // Handle movie Click in homepage
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <h1 className="text-center m-5 text-3xl font-bold">Películas Populares</h1>
      <MovieSlider movies={popularMovies} handleMovieClick={handleMovieClick} />
      <h2 className="text-center m-5 text-3xl font-bold">Todas las Películas</h2>
      <div className="movies">
        {popularMovies.map((movie, id) => (
          <div
            className="movie-card card cursor-pointer"
            key={id}
            onClick={() => handleMovieClick(movie.id)}
            title={movie.overview} // Agrega el título con la trama al pasar el ratón sobre la película
          >
            <h3 className="text-center text-xl font-semibold">{movie.title || movie.name}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
