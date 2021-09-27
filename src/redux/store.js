import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice"
import displayReducer from "./displaySlice"

const store = configureStore( {
    reducer: {
        client: clientReducer,
        display: displayReducer,
    },
    enhancer: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
} );

export default store;
