//Configuración del Store Redux con Redux Toolkit
import { configureStore } from "@reduxjs/toolkit"; // Importación de la función configureStore desde Redux Toolkit
import dataSlice from "../features/dataSlice"; // Importación del slice de datos desde el archivo correspondiente

// Configuración y creación del store de Redux
export default configureStore({
    reducer: {
        data: dataSlice.reducer, // Se define el reducer para el slice de datos
    },
});
