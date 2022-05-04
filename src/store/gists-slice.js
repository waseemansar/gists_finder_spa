import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    gists: [],
    forks: [],
    error: null,
    isLoading: true,
};

const gistsSlice = createSlice({
    name: "gists",
    initialState: { ...initialState },
    reducers: {
        loadUsername(state, action) {
            state.username = action.payload;
            state.isLoading = true;
        },
        loadGists(state, action) {
            state.gists = action.payload;
            state.isLoading = false;
        },
        loadForks(state, action) {
            state.forks = action.payload;
            state.isLoading = false;
        },
        loadGistsError(state, action) {
            state.gists = [];
            state.error = action.payload;
            state.isLoading = false;
        },
        loadForksError(state, action) {
            state.forks = [];
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const gistsActions = gistsSlice.actions;

export default gistsSlice;
