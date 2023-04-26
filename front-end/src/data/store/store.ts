import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth.slice';

const store = configureStore({
  reducer: {
    authReducer
  }
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
