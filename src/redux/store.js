import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice"
import displayReducer from "./displaySlice"
import stationReducer from "./stationSlice"

const store = configureStore( {
    reducer: {
        client: clientReducer,
        display: displayReducer,
        stations: stationReducer,
    },
    enhancer: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
} );

export default store;
