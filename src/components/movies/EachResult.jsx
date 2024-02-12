import { useNavigate } from "react-router-dom";

const EachResult = ({ result, setInput }) => {

  const navigate = useNavigate();  // Hook de navegación de React Router

  // Función que se ejecuta al hacer clic en un resultado
  const clicked = async () => {

    navigate(`movie/${result.id}`); // Navega a la página de detalles de la película utilizando el ID

    setInput(""); // Limpia el campo de entrada utilizando el estado de React
  };

  // Construye la URL del póster de la película utilizando la API de TMDB
  const posterURL = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;

  // Devuelve la representación visual de cada resultado con la imagen y el título
  return (
    <div className="each-result" onClick={clicked}>
      <img
        src={posterURL}
        alt={result.title}
        style={{ width: "70px", height: "100px", marginRight: "20px" }}
      />
      {result.title}
    </div>
  );
};


export default EachResult;
// Componente funcional EachResult que muestra información de una película y maneja la navegación al hacer clic