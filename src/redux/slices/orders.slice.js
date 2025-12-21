import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
  // email: null,
  // isLogin: false,
};

const ordersSlice = createSlice({
  initialState,
  name: "orders",
  reducers: {
    addUsers: (prevState, action) => {
      prevState.orders.push({
        ...action.payload,
      });
    },

    // loginUser: (prevState, action) => {
    //   const { email } = action.payload;
    //   prevState.email = email;
    //   prevState.isLogin = true;
    // },

    // logout: (prevState) => {
    //   prevState.email = null;
    //   prevState.isLogin = false;
    // },
  },
});

export const { addUsers, loginUser, logout } = ordersSlice.actions;
export default ordersSlice.reducer;
