import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../utils/fetch";
//import getMoviesNowPlayingData from "../../api/getMoviesNowPlayingData";

const baseURL = import.meta.env.VITE_MOVIE_GO_BASE;

const getAllGenresThunk = createAsyncThunk(
  "movies/getNowPlayingMovies",
  async (payload, { rejectWithValue }) => {
    try {
      await new Promise((res) =>
        setTimeout(() => {
          res();
        }, 2000),
      );
      const url = `${baseURL}${import.meta.env.VITE_MOVIE_GO_ALL_GENRE}`;
      const data = await fetchUrl(url);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  genres: [],
  fetchStatus: {
    getAllGenre: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
  },
  errors: {
    getAllGenre: null,
  },
};

const moviesSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getAllGenresThunk, {
      pending: (prevState) => {
        prevState.fetchStatus.getAllGenre.isLoading = true;
        prevState.fetchStatus.getAllGenre.isSuccess = false;
        prevState.fetchStatus.getAllGenre.isFailed = false;
      },
      fulfilled: (prevState, { payload }) => {
        prevState.fetchStatus.getAllGenre.isLoading = false;
        prevState.fetchStatus.getAllGenre.isSuccess = true;
        prevState.genres = payload.data;
      },
      rejected: (prevState, { payload }) => {
        prevState.fetchStatus.getAllGenre.isLoading = false;
        prevState.fetchStatus.getAllGenre.isSuccess = true;
        prevState.errors.getAllGenre = payload;
      },
    });
  },
});

export const genresActions = {
  actions: moviesSlice.actions,
  getAllGenresThunk,
};
export default moviesSlice.reducer;
