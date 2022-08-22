import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IResize {
  windowX: number;
}

const initialState: IResize = {
  windowX: window.innerWidth,
};

export const resizeSlice = createSlice({
  name: 'resize',
  initialState,
  reducers: {
    setResize(state, action: PayloadAction<number>) {
      state.windowX = action.payload;
    },
  },
});

export const { setResize } = resizeSlice.actions;

export default resizeSlice;
