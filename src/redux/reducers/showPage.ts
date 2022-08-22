import { createSlice } from '@reduxjs/toolkit';
// 페이로드 타입 지정
import type { PayloadAction } from '@reduxjs/toolkit';

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
    // increment: state => {
    //   state.value = '';
    // },
    // decrement: state => {
    //   state.value = '';
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { searchStorePage, prevPage, detailPage } = showPage.actions;
// export const { increment, decrement, incrementByAmount } = showPage.actions;

export default showPage;
