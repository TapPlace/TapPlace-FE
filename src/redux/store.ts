import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventSlice } from './slices/eventSlice';
import showPage from './slices/showPage';
// import counterReducer from '../features/counter/counterSlice'

const rootReducer = combineReducers({
  page: showPage.reducer,
  event: eventSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
