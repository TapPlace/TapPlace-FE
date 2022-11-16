import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IResize {
  windowX: number;
  memberScroll: {
    scrollX: number;
    scrollTransformX?: number;
  };
}

const initialState: IResize = {
  windowX: window.innerWidth,
  memberScroll: {
    scrollX: 0,
    scrollTransformX: 0,
  },
};

export const resizeSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    SET_RESIZE(state, action: PayloadAction<number>) {
      state.windowX = action.payload;
    },
    SET_MEMBER_SCROLLX(
      state,
      action: PayloadAction<{ scrollX: number; scrollTransformX: number }>,
    ) {
      state.memberScroll.scrollX = action.payload.scrollX;
      state.memberScroll.scrollTransformX = action.payload.scrollTransformX;
    },
  },
});

export const { SET_RESIZE, SET_MEMBER_SCROLLX } = resizeSlice.actions;

export default resizeSlice;
