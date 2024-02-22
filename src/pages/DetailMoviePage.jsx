import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, getImageUrl } from "../api/api";
import { AiFillStar } from "react-icons/ai";
import { CompraEntradas } from "../components";

export const DetailMoviePage = ({ setResults }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [entradas, setEntradas] = useState(0); // Estado para la cantidad de entradas reservadas

  useEffect(() => {
    const fetchMovieDetailsById = async () => {
      try {
        const movieDetailsData = await fetchMovieDetails(id, "es-MX");
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchMovieDetailsById();
  }, [id]);

  if (!movieDetails) {
    return <div>Cargando...</div>;
  }

  // Función para manejar el cambio en la cantidad de entradas
  const handleTicketChange = (event) => {
    const newEntradas = parseInt(event.target.value);
    setEntradas(newEntradas >= 0 ? newEntradas : 0);
  };

  // Calcula el precio total de las entradas
  const precioTotal = entradas * 10; // Precio fijo por ticket

  // Función para manejar la reserva de entradas
  const handleReservation = () => {
    // Guardar la compra en localStorage
    const compra = {
      movieTitle: movieDetails.title,
      entradas: entradas,
      totalPrice: precioTotal
    };

    const comprasAnteriores = JSON.parse(localStorage.getItem("compras")) || [];
    const nuevasCompras = [...comprasAnteriores, compra];
    localStorage.setItem("compras", JSON.stringify(nuevasCompras));

    // Mensaje de confirmación
    alert(`Reservaste ${entradas} entradas para ${movieDetails.title}. Total: ${precioTotal}€`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
      <img
        src={getImageUrl(movieDetails.poster_path)}
        alt={movieDetails.title}
        className="w-full h-[700px] lg:w-1/3 lg:h-4/5 object-cover rounded-2xl shadow-lg"
      />
      <div className="w-3/10 flex flex-col gap-10">
        <h3 className="text-[#eb6d6d] text-5xl font-extrabold">
          {movieDetails.title}
        </h3>
        <p className="text-lg text-justify">{movieDetails.overview}</p>

        <div className="flex flex-col gap-5 text-lg">
          <p>
            <strong className="text-xl text-red-500">Popularidad: </strong>
            {movieDetails.popularity}
          </p>
          <p>
            <strong className="text-xl text-red-500">Fecha de estreno: </strong>
            {movieDetails.release_date}
          </p>
          <p className="flex items-center gap-2">
            <strong className="text-xl text-red-500">Valoración: </strong>
            {movieDetails.vote_average}{" "}
            <AiFillStar className="text-yellow-500" />
          </p>
          <p>
            <strong className="text-xl text-red-500">Votos: </strong>
            {movieDetails.vote_count}
          </p>
        </div>
        <CompraEntradas
          handleTicketChange={handleTicketChange}
          entradas={entradas}
          totalPrice={precioTotal}
          handleReservation={handleReservation}
        />
      </div>
    </div>
  );
};
