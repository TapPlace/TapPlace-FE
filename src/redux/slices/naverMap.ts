import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NaverMapState {
  myLocation: {
    latitude: any;
    longitude: any;
  };
  detail: boolean;
  markers: Array<any>;
}

const initialState: NaverMapState = {
  myLocation: {
    latitude: undefined,
    longitude: undefined,
  },
  detail: false,
  markers: [],
};

export const naverMap = createSlice({
  name: 'naver',
  initialState,
  reducers: {
    setMyLocation(
      state,
      action: PayloadAction<{ latitude: any; longitude: any }>,
    ) {
      state.myLocation.latitude = action.payload.latitude;
      state.myLocation.longitude = action.payload.longitude;
    },
    setDetail(state, action: PayloadAction<boolean>) {
      state.detail = action.payload;
    },
    setNearbyStore(state, action: PayloadAction<any>) {
      state.markers = action.payload;
    },
  },
});

export const { setMyLocation, setDetail, setNearbyStore } = naverMap.actions;

export default naverMap;
