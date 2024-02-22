//Definimos un slice de Redux que maneja el estado de las compras
import { createSlice } from "@reduxjs/toolkit";

const comprasSlice = createSlice({
    name: "compras",
    initialState: {
        compras: [] // Inicialmente, no hay compras guardadas
    },
    reducers: {
        // Agregar una nueva compra al estado
        agregarCompra: (state, action) => {
        state.compras.push(action.payload);
        // Guardar la compra en el localStorage
        localStorage.setItem("compras", JSON.stringify(state.compras));
        },
    },
});

export const { actions: comprasActions, reducer: comprasReducer } = comprasSlice;
export default comprasSlice;
