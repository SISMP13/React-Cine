import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import CompraEntradas from './CompraEntradas';

const MovieInfo = ({ setResults }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [entradas, setEntradas] = useState(0); // Estado para la cantidad de entradas reservadas

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const tmdb_api_key = "6eacb4093b148c64428048da299ba592";
      const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?&api_key=${tmdb_api_key}&language=es-ES`;
      const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?&api_key=${tmdb_api_key}`;
      const imageUrl = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${tmdb_api_key}`;

      const [detailsResponse, creditsResponse, imageResponse] = await Promise.all([
        fetch(detailsUrl),
        fetch(creditsUrl),
        fetch(imageUrl),
      ]);

      const movieData = await detailsResponse.json();
      const creditData = await creditsResponse.json();
      const imageData = await imageResponse.json();

      const director = creditData.crew.find((person) => person.job === 'Director');
      const cast = creditData.cast.slice(0, 5).map((person) => person.name).join(', ');

      setMovie({
        ...movieData,
        director: director ? director.name : 'N/A',
        cast: cast,
      });
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div className="text-center mt-8">Cargando...</div>;

  // Función para manejar el cambio en la cantidad de entradas
  const handleTicketChange = (event) => {
    const newEntradas = parseInt(event.target.value);
    setEntradas(newEntradas >= 0 ? newEntradas : 0);
  };

  // Calcula el precio total de las entradas
  const precioTotal = entradas * 10; // Precio fijo por boleto

  // Función para manejar la reserva de entradas
  const handleReservation = () => {
    // Aquí puedes agregar la lógica para enviar la reserva a un backend, por ejemplo
    alert(`Reservaste ${entradas} entradas para ${movie.original_title}. Total: ${precioTotal}€`);
  };

  return (
    <>
      <Link className="block text-2xl text-dark" to="/">
        <BiArrowBack />
      </Link>
      <div className="flex justify-between items-start">
        <div className="movie-info mx-auto mb-5">
          <h2 className="text-3xl mb-2">
            {movie.original_title} ({movie.release_date})
          </h2>
          <img
            className="rounded poster"
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <p className="mt-4 text-lg">
            <span className="font-bold">Trama: </span>
            {movie.overview}
          </p>
          <p className="text-lg">
            <span className="font-bold">Cast: </span>
            {movie.cast}
          </p>
          <p className="text-lg">
            <span className="font-bold">Director: </span>
            {movie.director}
          </p>
          <p className="text-lg">
            <span className="font-bold">Género: </span>
            {movie.genres.slice(0, 3).map((genre) => genre.name).join(', ')}
          </p>
          <p className="text-lg">
            <span className="font-bold">IMDB Clasificación:</span> {movie.imdbRating} <FaStar className="mb-1" />
          </p>
        </div>
            <CompraEntradas
              handleTicketChange={handleTicketChange}
              entradas={entradas}
              totalPrice={precioTotal}
              handleReservation={handleReservation}
            />

      </div>
    </>
  );
};

export default MovieInfo;
