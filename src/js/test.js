import { configureStore, getDefaultMiddleware, createAction, createReducer } from "@reduxjs/toolkit";

const middleware = [
  ...getDefaultMiddleware(),
  /*YOUR CUSTOM MIDDLEWARES HERE*/
];

const loginSuccess = createAction("LOGIN_SUCCESS");
const loginFailed = createAction("LOGIN_FAILED");

const authState = {
  token: "",
  error: "",
};

const authReducer = createReducer(authState, {
  [loginSuccess]: (state, action) => {
    state.token = action.payload;
  },
  [loginFailed]: (state, action) => {
    state.error = action.payload;
  },
});

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});