import React from 'react';

const CompraEntradas = ({ handleTicketChange, entradas, totalPrice, handleReservation }) => {
    return (
        <div className="reservation-section">
            <h3 className="text-lg font-semibold mb-3">Reserva de Entradas</h3>
            <form className="mb-3">
                <div className="mb-4">
                    <label htmlFor="entradas">Entradas:</label>
                    <input
                        type="number"
                        id="entradas"
                        name="entradas"
                        min="0"
                        value={entradas}
                        onChange={handleTicketChange}
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="time">Elige la sesión:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="card">Número de tarjeta:</label>
                    <input
                        type="text"
                        id="card"
                        name="card"
                        className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>
            </form>

            {/* Resumen de la compra */}
            <div className="purchase-summary mb-3">
                <h4 className="text-lg font-semibold">Resumen de la compra:</h4>
                <p>Número de entradas: {entradas}</p>
                <p>Total a pagar: {totalPrice}€</p>
            </div>

           {/* Botón para reservar */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={handleReservation}>Reservar</button>
        </div>
    );

};

export default CompraEntradas;
