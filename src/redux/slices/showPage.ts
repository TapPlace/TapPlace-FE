import { createSlice } from '@reduxjs/toolkit';

export interface ShowPageState {
  value: string | undefined;
}

const initialState: ShowPageState = {
  value: 'home',
};

export const showPage = createSlice({
  name: 'page',
  initialState,
  reducers: {
    initalPage: state => {
      state.value = 'home';
    },
    searchStorePage: state => {
      state.value = 'searchStorePage';
    },
    prevPage: state => {
      state.value = 'prevPage';
    },
    detailPage: state => {
      state.value = 'detailPage';
    },
    myPage: state => {
      state.value = 'myPage';
    },
  },
});

export const { searchStorePage, prevPage, detailPage } = showPage.actions;
// export const { increment, decrement, incrementByAmount } = showPage.actions;

export default showPage;
