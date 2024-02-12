/*Definimos un componente funcional de React llamado `ResultadosBusqueda`en el que se necesitan tres accesorios:
`resultados`, `onMovieClick` y `setInput`. */
import React from 'react';
import EachResult from './EachResult';

const ResultadosBusqueda = ({ results, onMovieClick, setInput }) => {
  return (
    <div className='results-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {results.map((result, id) => (
        <EachResult result={result} key={id} onMovieClick={onMovieClick} setInput={setInput} />
      ))}
    </div>
  );
};

export default ResultadosBusqueda;
