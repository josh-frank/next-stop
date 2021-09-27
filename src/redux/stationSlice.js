import { createSlice } from "@reduxjs/toolkit";

const stationsSlice = createSlice( {
    name: "stations",
    initialState: [],
    reducers: {
        addStation: ( state, action ) => [ ...state, action.payload ],
    }
} );

export const {
    addStation,
} = stationsSlice.actions;
export default stationsSlice.reducer;