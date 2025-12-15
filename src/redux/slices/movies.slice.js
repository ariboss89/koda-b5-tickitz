import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUrl from "../../utils/fetch";
//import getMoviesNowPlayingData from "../../api/getMoviesNowPlayingData";

const getNowPlayingMoviesThunk = createAsyncThunk(
  "movies/getNowPlayingMovies",
  async (payload, { rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_MOVIE_API}?api_key=${
        import.meta.env.VITE_MOVIE_KEY
      }`;
      //const data = await getMoviesNowPlayingData(url);
      const data = await fetchUrl(url);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
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
      console.log(error);
      rejectWithValue(error);
    }
  }
);

const initialState = {
  nowPlaying: [],
  upcoming: [],
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
  },
  errors: {
    nowPlaying: null,
    upcoming: null,
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
      });
    // .addCase(getNowPlayingMoviesThunk.pending, () => {})
    // .addCase(getNowPlayingMoviesThunk.fulfilled, () => {})
    // .addCase(getNowPlayingMoviesThunk.rejected, () => {});
  },
});

export const movieActions = {
  actions: moviesSlice.actions,
  getNowPlayingMoviesThunk,
  getUpcomingMoviesThunk,
};
export default moviesSlice.reducer;
