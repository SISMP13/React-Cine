import React from "react";
import { FaSearch } from "react-icons/fa";

const BarraBusqueda = ({ setResults, input, setInput }) => {
  // Fetching data
  const fetchData = async (value) => {
    const api_key = "6eacb4093b148c64428048da299ba592";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}&language=es-ES`;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const movieData = await res.json();
      console.log(movieData);

      if (movieData.Error) {
        console.log(movieData.Error);
        setResults([]);
      } else {
        // Empujándolo a la matriz de resultados en app.jsx
        setResults(movieData.results);
      }
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim()) {
      fetchData(value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="flex items-center">
      <a href="#" className="mr-2">
        <FaSearch color="grey" size={40} />
      </a>
      <input
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 ml-2"
        type="text"
        placeholder="Search a Movie..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );

};

export default BarraBusqueda;
