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

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setResize(state, action: PayloadAction<number>) {
      state.windowX = action.payload;
    },
    setMemberScrollX(
      state,
      action: PayloadAction<{ scrollX: number; scrollTransformX: number }>,
    ) {
      state.memberScroll.scrollX = action.payload.scrollX;
      state.memberScroll.scrollTransformX = action.payload.scrollTransformX;
    },
  },
});

export const { setResize, setMemberScrollX } = eventSlice.actions;

export default eventSlice;
