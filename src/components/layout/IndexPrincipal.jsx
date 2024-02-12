
import React, { useEffect } from "react";
import axios from "axios";
import { useState, useContext } from "react";
import MoviesList from "../movies/MoviesList";
import BarraBusqueda from "../movies/BarraBusqueda";
import ResultadosBusqueda from "../movies/ResultadosBusqueda";
import MovieInfo from "../movies/MovieInfo";

const MovieDashboard = () => {
    const [results, setResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [input, setInput] = useState("");

    const [popularMovies, setPopularMovies] = useState([]);

    // fetch popular movies
    const fetchMovie = async () => {
        const tmdb_api_key = "6eacb4093b148c64428048da299ba592";
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdb_api_key}&language=es-ES`;
        try {
        const res = await axios.get(url);
        if (res.Error) {
            console.log(res.Error);
            setPopularMovies([]);
        } else {
            const { results } = res.data;
            console.log(results);
            setPopularMovies(results);
        }
        } catch (err) {
        console.log("Error fetching trending movies:", err);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    //manejar haga clic en cada resultado
    const handleMovieClick = (movieData) => {
        setSelectedMovie(movieData);
        setResults([]); //Borrar los resultados de la búsqueda
    };
    return (
        <>
        <BarraBusqueda setResults={setResults} input={input} setInput={setInput} />
        <ResultadosBusqueda
            results={results}
            onMovieClick={handleMovieClick}
            setInput={setInput}
        />
        {selectedMovie ? (
            <MovieInfo setResults={setResults} />
        ) : (
            <MoviesList popularMovies={popularMovies} />
        )}
        </>
    );
};

export default MovieDashboard;
