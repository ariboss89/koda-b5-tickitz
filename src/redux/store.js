import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistCombineReducers, persistStore } from "redux-persist";

import moviesReducer from "./slices/movies.slice";
import usersReducer from "./slices/user.slice";

const persistConfig = { key: "ari-redux", storage, whitelist: ["users"] };
const persistedReducers = persistCombineReducers(persistConfig, {
  movies: moviesReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: persistedReducers,
});

export const persistedStore = persistStore(store);
export default store;
