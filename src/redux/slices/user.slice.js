import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    addUsers: (prevState, action) => {
      prevState.users.push({
        ...action.payload,
      });
      prevState.nextId++;
    },

    // loginUsers: (prevState, action) => {
    //   const users = prevState.users.filter((user) => {
    //     if (user.email == action.payload && user.password) return true;
    //   });
    //   prevState.users = users;

    //   console.log(users);
    // },

    loginUsers: (prevState, action) => {
      const users = prevState.users.filter((user) => {
        if (
          user.email == action.payload.email &&
          user.password == action.payload.password
        ) {
          //console.log("Maniss");
          return user;
        }
      });

      prevState.users = users;

      // console.log(prevState.users, "userku");

      // const newUsers = prevState.users.map((user) => {
      //   if (
      //     user.email === action.payload.email &&
      //     user.password === action.payload.password
      //   ) {
      //     console.log(action.payload, "datanya");

      //     return action.payload;
      //   }
      //   console.log(user, "data user nya");
      //   return user;
      // });
      // prevState.users = newUsers;
    },
  },
});

export const { addUsers, loginUsers } = usersSlice.actions;
export default usersSlice.reducer;
