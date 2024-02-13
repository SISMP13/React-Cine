import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../api/api";
import { BsLink45Deg, BsFillPlayCircleFill } from "react-icons/bs";
import { BiMessageSquareAdd } from "react-icons/bi";

export const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(movie.id));
  });

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, movie.id])
      );
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-[270px] h-[450px] bg-[#141414] p-5 rounded-lg flex flex-col justify-between items-center gap-2 overflow-hidden relative">
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      <h2 className="text-center font-bold">{movie.title}</h2>
      <div className="w-full flex justify-between">
        <p className="flex items-center gap-2">
          {movie.vote_average} <span className="text-yellow-500">★</span>
        </p>
        <p>{movie.release_date}</p>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 opacity-0 bg-black/50 transition-all duration-75">
        <Link
          to={`/detail/${movie.id}`}
          className="w-3/4 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          <BsLink45Deg />
          Ver detalles
        </Link>
        <button
          onClick={toggleFavorite}
          className={`w-3/4 flex items-center justify-center gap-2 px-4 py-2 ${
            isFavorite ? "bg-orange-700" : "bg-green-700"
          } text-white rounded-lg`}
        >
          <BiMessageSquareAdd />
          {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </button>
      </div>
    </div>
  );
};
