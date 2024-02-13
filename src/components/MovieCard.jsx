import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../api/api"; // Importación de la función para obtener la URL de la imagen
import { BsLink45Deg } from "react-icons/bs"; // Iconos para el enlace
import { BiMessageSquareAdd } from "react-icons/bi"; // Icono para el botón de favoritos

// Componente de tarjeta de película
export const MovieCard = ({ movie }) => {
  // Estado para controlar si la película es favorita o no
  const [isFavorite, setIsFavorite] = useState(false);

  // Efecto para comprobar si la película es favorita al montar el componente
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []; // Obtener los favoritos del almacenamiento local
    setIsFavorite(favorites.includes(movie.id)); // Comprobar si la película actual está en favoritos
  }, [movie.id]); // Ejecutar el efecto cada vez que cambie la película

  // Función para agregar o quitar la película de favoritos
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []; // Obtener los favoritos del almacenamiento local

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== movie.id); // Eliminar la película de favoritos
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Actualizar los favoritos en el almacenamiento local
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, movie.id])
      ); // Agregar la película a favoritos
    }
    setIsFavorite(!isFavorite); // Cambiar el estado de favorito
  };

  // Renderizado del componente
  return (
    <div className="w-[270px] h-[450px] bg-[#141414] p-5 rounded-lg flex flex-col justify-between items-center gap-2 overflow-hidden relative">
      {/* Imagen de la película */}
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      {/* Título de la película */}
      <h2 className="text-center font-bold">{movie.title}</h2>
      {/* Información de la película (calificación y fecha de lanzamiento) */}
      <div className="w-full flex justify-between">
        <p className="flex items-center gap-2">
          {movie.vote_average} <span className="text-yellow-500">★</span>
        </p>
        <p>{movie.release_date}</p>
      </div>
      {/* Botones de acciones (ver detalles y agregar/quitar de favoritos) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 opacity-0 bg-black/50 transition-all duration-75">
        {/* Enlace para ver detalles de la película */}
        <Link
          to={`/detail/${movie.id}`}
          className="w-3/4 flex items-center justify-center gap-2 px-4 py-2 bg-pink-400 text-white rounded-lg font-bold"
        >
          <BsLink45Deg />
          <span className="text-white">Ver detalles</span>
        </Link>
        {/* Botón para agregar/quitar de favoritos */}
        <button
          onClick={toggleFavorite}
          className={`w-3/3 flex items-center justify-center gap-2 px-4 py-2 ${
            isFavorite ? "bg-purple-500" : "bg-green-500"
          } text-white rounded-lg font-bold`}
        >
          <BiMessageSquareAdd />
          <span className="text-white">
            {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          </span>
        </button>
      </div>
    </div>
  );
};
