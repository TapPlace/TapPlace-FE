import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { resizeSlice } from './slices/resizeSlice';
import playApp from './slices/PlayApp';
import showPage from './slices/showPage';

const rootReducer = combineReducers({
  page: showPage.reducer,
  resize: resizeSlice.reducer,
  playApp: playApp.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
