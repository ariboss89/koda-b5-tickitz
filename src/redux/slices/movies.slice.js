import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../utils/fetch";
//import getMoviesNowPlayingData from "../../api/getMoviesNowPlayingData";

const getNowPlayingMoviesThunk = createAsyncThunk(
  "movies/getNowPlayingMovies",
  async (payload, { rejectWithValue }) => {
    try {
      await new Promise((res) =>
        setTimeout(() => {
          res();
        }, 5000),
      );
      const url = `${import.meta.env.VITE_MOVIE_API}?api_key=${
        import.meta.env.VITE_MOVIE_KEY
      }`;
      //const data = await getMoviesNowPlayingData(url);
      const data = await fetchUrl(url);
      // console.log(data, "hehehajakkaala");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const getUpcomingMoviesThunk = createAsyncThunk(
  "movies/getUpcomingMovies",
  async (payload, { rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_MOVIE_UPCOMING}?api_key=${
        import.meta.env.VITE_MOVIE_KEY
      }`;
      const data = await fetchUrl(url);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const getDetailMoviesThunk = createAsyncThunk(
  "movies/getDetailMovies",
  async (id, { rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_MOVIE_DETAIL}${id}?api_key=${
        import.meta.env.VITE_MOVIE_KEY
      }`;
      const data = await fetchUrl(url);
      console.log(data, "aomm");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const getGenreMoviesThunk = createAsyncThunk(
  "movies/getGenre",
  async (id, { rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_MOVIE_GENRE}?api_key=${
        import.meta.env.VITE_MOVIE_KEY
      }`;
      const data = await fetchUrl(url);
      console.log(data, "heheh");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const initialState = {
  nowPlaying: [],
  upcoming: [],
  detail: [],
  genre: [],
  fetchStatus: {
    nowPlaying: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
    upcoming: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
    detail: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
    genre: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
  },
  errors: {
    nowPlaying: null,
    upcoming: null,
    detail: null,
    genre: null,
  },
};

const moviesSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getNowPlayingMoviesThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.nowPlaying.isLoading = true;
          prevState.fetchStatus.nowPlaying.isSuccess = false;
          prevState.fetchStatus.nowPlaying.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.nowPlaying.isLoading = false;
          prevState.fetchStatus.nowPlaying.isSuccess = true;
          prevState.nowPlaying = payload.results;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.nowPlaying.isLoading = false;
          prevState.fetchStatus.nowPlaying.isSuccess = true;
          prevState.errors.nowPlaying = payload;
        },
      })
      .addAsyncThunk(getUpcomingMoviesThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.upcoming.isLoading = true;
          prevState.fetchStatus.upcoming.isSuccess = false;
          prevState.fetchStatus.upcoming.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.upcoming.isLoading = false;
          prevState.fetchStatus.upcoming.isSuccess = true;
          prevState.upcoming = payload.results;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.upcoming.isLoading = false;
          prevState.fetchStatus.upcoming.isSuccess = true;
          prevState.errors.upcoming = payload;
        },
      })
      .addAsyncThunk(getDetailMoviesThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.detail.isLoading = true;
          prevState.fetchStatus.detail.isSuccess = false;
          prevState.fetchStatus.detail.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.detail.isLoading = false;
          prevState.fetchStatus.detail.isSuccess = true;
          prevState.detail = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.detail.isLoading = false;
          prevState.fetchStatus.detail.isSuccess = true;
          prevState.errors.detail = payload;
        },
      })
      .addAsyncThunk(getGenreMoviesThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.genre.isLoading = true;
          prevState.fetchStatus.genre.isSuccess = false;
          prevState.fetchStatus.genre.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.genre.isLoading = false;
          prevState.fetchStatus.genre.isSuccess = true;
          prevState.genre = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.genre.isLoading = false;
          prevState.fetchStatus.genre.isSuccess = true;
          prevState.errors.genre = payload;
        },
      });
  },
});

export const movieActions = {
  actions: moviesSlice.actions,
  getNowPlayingMoviesThunk,
  getUpcomingMoviesThunk,
  getDetailMoviesThunk,
  getGenreMoviesThunk,
};
export default moviesSlice.reducer;
