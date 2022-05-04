import { configureStore } from "@reduxjs/toolkit";

import gistsSlice from "./gists-slice";

const store = configureStore({
    reducer: { gists: gistsSlice.reducer },
});

export default store;
