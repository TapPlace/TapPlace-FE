import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventSlice } from './slices/eventSlice';
import naverMap from './slices/naverMap';
import showPage from './slices/showPage';

const rootReducer = combineReducers({
  page: showPage.reducer,
  naver: naverMap.reducer,
  event: eventSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
