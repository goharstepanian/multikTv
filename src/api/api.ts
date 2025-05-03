import axios from "axios";
import { FilmsType, GenresType } from "../types/types";



type GetGenresReturnType = {
  genres: Array<GenresType>;
};

type GetFilmsReturnType = {
  page: number;
  results: Array<FilmsType>;
};
const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const API = {
  getGenres() {
    return instance.get<GetGenresReturnType>(
      `/genre/movie/list?api_key=${apiKey}&language=en-US`
    );
  },
  getFilms(pageCount: number) {
    return instance.get<GetFilmsReturnType>(
      `discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}`
    );
  },
};

export default API;