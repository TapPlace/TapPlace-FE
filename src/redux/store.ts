import { configureStore } from '@reduxjs/toolkit';
import showPage from './reducers/showPage';
// import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    page: showPage,
    // counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
