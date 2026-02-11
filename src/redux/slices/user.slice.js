import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = import.meta.env.VITE_MOVIE_GO_BASE;

const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseURL}${import.meta.env.VITE_MOVIE_GO_REGISTER}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData, "data");
        return rejectWithValue(errorData.error);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseURL}${import.meta.env.VITE_MOVIE_GO_LOGIN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.error);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logoutUserThunk = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseURL}${import.meta.env.VITE_MOVIE_GO_LOGOUT}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${payload}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.error);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  email: null,
  isLogin: false,
  fetchStatus: {
    registerUser: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
      errorMessage: "",
    },
    nowLogin: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
      errorMessage: "",
    },
    logoutUser: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
      errorMessage: "",
    },
  },
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(registerUserThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.registerUser.isLoading = true;
          prevState.fetchStatus.registerUser.isSuccess = false;
          prevState.fetchStatus.registerUser.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.registerUser.isLoading = false;
          prevState.fetchStatus.registerUser.isSuccess = true;
          prevState.fetchStatus.registerUser.errorMessage = "";
          prevState.fetchStatus.registerUser = payload.data;
          console.log(payload, "fullfilled");
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.registerUser.isLoading = false;
          prevState.fetchStatus.registerUser.isSuccess = false;
          prevState.fetchStatus.registerUser.errorMessage = payload;
          console.log(payload.error, "rejected");
        },
      })
      .addAsyncThunk(loginUserThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.nowLogin.isLoading = true;
          prevState.fetchStatus.nowLogin.isSuccess = false;
          prevState.fetchStatus.nowLogin.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.nowLogin.isLoading = false;
          prevState.fetchStatus.nowLogin.isSuccess = true;
          prevState.fetchStatus.nowLogin.errorMessage = "";
          prevState.fetchStatus.nowLogin = payload.data;
          prevState.email = payload.data.email;
          prevState.isLogin = true;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.nowLogin.isLoading = false;
          prevState.fetchStatus.nowLogin.isSuccess = false;
          prevState.fetchStatus.nowLogin.errorMessage = payload;
        },
      })
      .addAsyncThunk(logoutUserThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.logoutUser.isLoading = true;
          prevState.fetchStatus.logoutUser.isSuccess = false;
          prevState.fetchStatus.logoutUser.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.logoutUser.isLoading = false;
          prevState.fetchStatus.logoutUser.isSuccess = true;
          prevState.fetchStatus.logoutUser.errorMessage = "";
          prevState.fetchStatus.logoutUser = payload;
          prevState.email = null;
          prevState.isLogin = false;
          prevState.fetchStatus.nowLogin = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.logoutUser.isLoading = false;
          prevState.fetchStatus.logoutUser.isSuccess = false;
          prevState.fetchStatus.logoutUser.errorMessage = payload;
        },
      });
  },
});

export const userActions = {
  actions: usersSlice.actions,
  registerUserThunk,
  loginUserThunk,
  logoutUserThunk,
};

export default usersSlice.reducer;
