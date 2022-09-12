import { createSlice } from '@reduxjs/toolkit';
// 페이로드 타입 지정
import type { PayloadAction } from '@reduxjs/toolkit';

export interface searchPageState {
  word: string | undefined;
}

const initialState: searchPageState = {
  word: '',
};

export const showPage = createSlice({
  name: 'searchWord',
  initialState,
  reducers: {
    changeSearchInput: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.word = value;
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

// export const {} = showPage.actions;
// export const { increment, decrement, incrementByAmount } = showPage.actions;

export default showPage.reducer;
