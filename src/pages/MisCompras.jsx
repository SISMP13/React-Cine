import React, { useState, useEffect } from "react";

export const MisCompras = () => {
    // Estado local para almacenar las compras realizadas
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        // Obtener las compras realizadas desde el localStorage al cargar el componente
        const storedCompras = JSON.parse(localStorage.getItem("compras")) || [];
        setCompras(storedCompras);
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-extrabold mb-4 uppercase">
                Mis Compras
            </h1>
            {compras.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {compras.map((compra, index) => (
                        <li className="bg-gray-800 p-5 rounded-lg" key={index}>
                            <div className="flex flex-col gap-5">
                                <p className="text-center font-bold text-xl">Compra {index + 1}</p>
                                <p>Número de entradas: {compra.entradas}</p>
                                <p>Total a pagar: {compra.totalPrice}€</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-orange-500 text-4xl font-extrabold text-center">
                    Aún no has realizado ninguna compra.
                </p>
            )}
        </div>
    );
};
