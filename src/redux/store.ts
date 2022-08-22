import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { resizeSlice } from './reducers/resizeSlice';
import showPage from './reducers/showPage';
// import counterReducer from '../features/counter/counterSlice'

const rootReducer = combineReducers({
  page: showPage.reducer,
  resize: resizeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
