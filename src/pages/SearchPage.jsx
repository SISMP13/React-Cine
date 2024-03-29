import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchMovies, getImageUrl } from "../api/api";
import { BsLink45Deg } from "react-icons/bs";

export const SearchPage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
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
      <h2 className="text-6xl font-extrabold capitalize mb-10 text-center">
        Resultados de <span className="text-[#eb6d6d]">{query}</span>
      </h2>
      {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {searchResults.map((movie) => (
            <div
              key={movie.id}
              className="w-[300px] h-[500px] bg-[#231b6655] p-7 flex flex-col justify-center items-center gap-5 rounded-xl"
            >
              <div className="flex justify-center items-center"> {/* Agregado un div para centrar la imagen */}
                <img
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-[320px] rounded-xl"
                />
              </div>
              <p className="text-center font-bold ">{movie.title}</p>
              <Link
                to={`/detail/${movie.id}`}
                className="w-3/4 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                <BsLink45Deg />
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-orange-600 font-extrabold text-4xl text-center">
          No hay resultados de {query}
        </p>
      )}
    </>
  );
};
