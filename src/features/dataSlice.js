import { createSlice } from "@reduxjs/toolkit";

/* El código está creando un segmento de Redux usando la función `createSlice` de `@reduxjs/toolkit`
biblioteca.*/
const dataSlice = createSlice({
    name: "data",
    initialState: {
        datos: null,
    },
    reducers: {
        actualizarDatos: (state, action) => {
            state.datos = action.payload;
        },
        setOverview(state, action) {
            state.overview = action.payload;
        },
    },
});

export const { actions, reducer, setOverview } = dataSlice;
export default dataSlice;
