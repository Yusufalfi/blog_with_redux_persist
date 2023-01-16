import { configureStore } from "@reduxjs/toolkit";
// import PostReducer from "./Post/PostSlice";
// import UserReducer from "./User/UserSlice";
//redux persist
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  import rootReducer from "./combineReducer";

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // reducer : {
    //     post: PostReducer,
    //     user: UserReducer,
    // }
})

export default store