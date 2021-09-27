import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice( {
    name: "display",
    initialState: {
        showMenu: true,
        darkMode: false
    },
    reducers: {
        setShowMenu: ( state, action ) => ( { ...state, showMenu: action.payload } ),
        setDarkMode: ( state, action ) => ( { ...state, darkMode: action.payload } ),
    }
} );

export const {
    setShowMenu,
    setDarkMode,
} = displaySlice.actions;
export default displaySlice.reducer;