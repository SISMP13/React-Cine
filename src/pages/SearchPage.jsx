import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchMovies, getImageUrl } from "../api/api";
import { BsLink45Deg } from "react-icons/bs";

export const SearchPage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  // Desplaza la página hacia arriba al cargar el componente
  window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    // Función para obtener los resultados de búsqueda
    const fetchSearchResults = async () => {
      try {
        const language = "es-MX";
        const response = await searchMovies(query, language);
        setSearchResults(response.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <>
      {/* Encabezado con el título y el término de búsqueda */}
      <h2 className="text-6xl font-extrabold capitalize mb-10 text-center">
        Resultados de <span className="text-[#eb6d6d]">{query}</span>
      </h2>

      {/* Verificar si hay resultados de búsqueda */}
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"> {/* Añadido gap-8 para espacio entre elementos */}
          {/* Mapear los resultados de búsqueda */}
          {searchResults.map((movie) => (
            <div
              key={movie.id}
              className="w-[300px] h-[500px] bg-[#231b6655] p-7 flex flex-col justify-center items-center gap-5 rounded-xl"
            >
              <div className="flex justify-center items-center"> {/* Agregado un div para centrar la imagen */}
                {/* Imagen de la película */}
                <img
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-[320px] rounded-xl"
                />
              </div>
              {/* Título de la película */}
              <p className="text-center font-bold ">{movie.title}</p>
              {/* Enlace para ver detalles de la película */}
              <Link
                to={`/detail/${movie.id}`}
                className="w-3/4 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-bold"
              >
                <BsLink45Deg />
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // Mensaje si no hay resultados de búsqueda
        <p className="text-orange-600 font-extrabold text-4xl text-center">
          No hay resultados de {query}
        </p>
      )}
    </>
  );
};
