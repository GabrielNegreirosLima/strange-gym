import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
