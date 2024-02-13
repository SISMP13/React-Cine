
//TODAS LAS PETICIONES A LA API
import axios from "axios";

// Definición de constantes para las URLs de la API y la clave de API
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const URL_SEARCH = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "6eacb4093b148c64428048da299ba592";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// Función para obtener datos de películas populares
export const fetchData = async (page, language) => {
    try {
        const response = await axios.get(BASE_URL + `/popular?api_key=${API_KEY}&page=${page}&language=${language}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

// Función para obtener detalles de una película específica
export const fetchMovieDetails = async (movieId, language) => {
    try {
        const response = await axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=${language}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

// Función para obtener la URL de la imagen de una película
export const getImageUrl = (path) => {
    return `${IMAGE_BASE_URL}${path}`;
};

// Función para buscar películas según un término de búsqueda
export const searchMovies = async (query, language) => {
    try {
        const response = await axios.get(
            `${URL_SEARCH}`, {
            params: {
                api_key: API_KEY,
                query,
                language
            }
        }
        );

        // Filtrar los resultados para que coincidan con el término de búsqueda
        const filteredResults = response.data.results.filter(
            (movie) =>
                movie.title.toLowerCase().includes(query.toLowerCase()) ||
                movie.original_title.toLowerCase().includes(query.toLowerCase())
        );

        return { results: filteredResults };
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error;
    }
};

// Función para obtener detalles de las películas favoritas
export const fetchFavoriteMovies = async (favoriteIds) => {
    try {
        const favoriteMovies = await Promise.all(
            favoriteIds.map(async (id) => {
                const response = await axios.get(`${BASE_URL}${id}`, {
                    params: {
                        api_key: API_KEY,
                    },
                });

                return response.data;
            })
        );

        return favoriteMovies;
    } catch (error) {
        console.error("Error fetching favorite movies:", error);
        throw error;
    }
};