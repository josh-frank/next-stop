import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice( {
    name: "client",
    initialState: {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight,
        mouseCoordinates: { x: null, y: null },
        mouseDown: false
    },
    reducers: {
        setDimensions( state, action ) {
            return { ...state, width: action.payload.width || state.width, height: action.payload.height || state.height };
        },
        setMouseCoordinates( state, action ) {
            return { ...state, mouseCoordinates: action.payload };
        },
        setMouseDown( state, action ) {
            return { ...state, mouseDown: action.payload };
        }
    }
} );

export const {
    setDimensions,
    setMouseCoordinates,
    setMouseDown
} = clientSlice.actions;
export default clientSlice.reducer;