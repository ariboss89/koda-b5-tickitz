import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  accounts: [],
  email: null,
  isLogin: false,
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    addUsers: (prevState, action) => {
      prevState.accounts.push({
        ...action.payload,
      });
    },

    loginUser: (prevState, action) => {
      const { email } = action.payload;
      prevState.email = email;
      prevState.isLogin = true;
    },

    logout: (prevState) => {
      prevState.email = null;
      prevState.isLogin = false;
    },
  },
});

export const { addUsers, loginUser, logout } = usersSlice.actions;
export default usersSlice.reducer;
