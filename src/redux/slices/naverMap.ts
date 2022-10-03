import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NaverMapState {
  myLocation: {
    latitude: any;
    longitude: any;
  };
  detail: {
    store_id: string | undefined;
    place_name: string | undefined;
    phone: string | undefined;
    road_address_name: string | undefined;
    address_name: string | undefined;
    category_group_name: string | undefined;
    distance: number | undefined;
    pays: Array<string> | undefined;
    x: string | undefined;
    y: string | undefined;
  };
  detailFlag: boolean;
  markers: Array<any>;
  lastLocation: {
    x: any;
    y: any;
  };
}

const initialState: NaverMapState = {
  myLocation: {
    latitude: undefined,
    longitude: undefined,
  },
  detail: {
    store_id: undefined,
    place_name: undefined,
    phone: undefined,
    road_address_name: undefined,
    address_name: undefined,
    category_group_name: undefined,
    distance: undefined,
    pays: undefined,
    x: undefined,
    y: undefined,
  },
  detailFlag: false,
  markers: [],
  lastLocation: {
    x: undefined,
    y: undefined,
  },
};

export const naverMap = createSlice({
  name: 'naver',
  initialState,
  reducers: {
    // 내 위치(위, 경도) 저장
    setMyLocation(
      state,
      action: PayloadAction<{ latitude: any; longitude: any }>,
    ) {
      state.myLocation.latitude = action.payload.latitude;
      state.myLocation.longitude = action.payload.longitude;
    },
    // 지도 마지막 보고 있던 위치
    setLastLocation(state, action: PayloadAction<{ x: any; y: any }>) {
      state.lastLocation.x = action.payload.x;
      state.lastLocation.y = action.payload.y;
    },
    // 클릭한 가맹점의 정보
    setDetail(state, action: PayloadAction<any>) {
      state.detail.store_id = action.payload.store_id;
      state.detail.place_name = action.payload.place_name;
      state.detail.phone = action.payload.phone;
      state.detail.road_address_name = action.payload.road_address_name;
      state.detail.address_name = action.payload.address_name;
      state.detail.category_group_name = action.payload.category_group_name;
      state.detail.distance = action.payload.distance;
      state.detail.pays = action.payload.pays;
      state.detail.x = action.payload.x;
      state.detail.y = action.payload.y;
    },
    // true면 상세정보 띄우는 flag
    setDetailFlag(state, action: PayloadAction<boolean>) {
      state.detailFlag = action.payload;
    },
    // distance 반경 가맹점들 저장
    setNearbyStore(state, action: PayloadAction<any>) {
      state.markers = action.payload;
    },
  },
});

export const {
  setMyLocation,
  setLastLocation,
  setDetail,
  setDetailFlag,
  setNearbyStore,
} = naverMap.actions;

export default naverMap;
