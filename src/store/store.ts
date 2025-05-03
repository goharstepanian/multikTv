import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/Genres/genresSlice";
import filmsSlice from "./slices/Films/filmsSlice";

const store = configureStore({
  reducer: {
    genres: genresSlice,
    films: filmsSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
