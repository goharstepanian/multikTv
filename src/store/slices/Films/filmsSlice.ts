import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../api/api";
import { FilmsSliceStateType, FilmsType } from "../../../types/types";

export const getFilms = createAsyncThunk<Array<FilmsType>, number>(
  "getFilms",
  async (page) => {
    const res = await API.getFilms(page);

    return res.data.results;
  }
);

const initialState: FilmsSliceStateType = {
  results: [],
  page: 1,
};
const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {},
});

export default filmsSlice.reducer;
