import { createSlice } from "@reduxjs/toolkit";

const comprasSlice = createSlice({
    name: "compras",
    initialState: {
        compras: [] // Inicialmente, no hay compras guardadas
    },
    reducers: {
        // Agregar una nueva compra
        agregarCompra: (state, action) => {
        state.compras.push(action.payload);
        // Guardar la compra en el localStorage
        localStorage.setItem("compras", JSON.stringify(state.compras));
        },
        // Otras acciones relacionadas con las compras podrían ir aquí
    },
});

export const { actions: comprasActions, reducer: comprasReducer } = comprasSlice;
export default comprasSlice;
