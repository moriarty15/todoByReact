import todosReducer from "./todos/todos-reducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger"
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "todos",
    storage,
    blacklist: ['filter'],
  };

const store = configureStore({
    reducer: {
        todos: persistReducer(persistConfig, todosReducer),
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
})

const persistor = persistStore(store);

export {store, persistor}