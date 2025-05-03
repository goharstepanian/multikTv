import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import API from "../../../api/api";
import { GenresSliceStateType, GenresType } from "../../../types/types";



export const getGenres = createAsyncThunk<Array<GenresType>>(
  "getGenres",
  async () => {
    const res = await API.getGenres();

    return res.data.genres;
  }
);

const initialState: GenresSliceStateType = {
  genres: [],
  isFetching: false,
};

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(
      getGenres.fulfilled,
      (state, action: PayloadAction<Array<GenresType>>) => {
        state.genres = action.payload;
        state.isFetching = false;
      }
    );
  },
});

export default genresSlice.reducer;
