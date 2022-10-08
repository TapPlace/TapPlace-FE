import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlayAppState {
  myLocation: {
    latitude: any;
    longitude: any;
  };
  lastLocation: {
    latitude: any;
    longitude: any;
  };
  storeDetailFlag: boolean;
  storeDetailInfo: {
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
  storeInDistance: Array<any>;
  _storeInDistance: Array<any>;
  searchWord: string | undefined;
  myAddress: string | undefined;
}

const initialState: PlayAppState = {
  myLocation: {
    latitude: undefined,
    longitude: undefined,
  },
  lastLocation: {
    latitude: undefined,
    longitude: undefined,
  },
  storeDetailFlag: false,
  storeDetailInfo: {
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
  storeInDistance: [],
  _storeInDistance: [],
  searchWord: undefined,
  myAddress: undefined,
};

export const playApp = createSlice({
  name: 'playApp',
  initialState,
  reducers: {
    SET_MY_LOCATION(
      state,
      action: PayloadAction<{ latitude: any; longitude: any }>,
    ) {
      state.myLocation.latitude = action.payload.latitude;
      state.myLocation.longitude = action.payload.longitude;
    },
    SET_LAST_LOCATION(
      state,
      action: PayloadAction<{ latitude: any; longitude: any }>,
    ) {
      state.lastLocation.latitude = action.payload.latitude;
      state.lastLocation.longitude = action.payload.longitude;
    },
    SET_DETAIL_INFO(state, action: PayloadAction<any>) {
      state.storeDetailInfo.store_id = action.payload.store_id;
      state.storeDetailInfo.place_name = action.payload.place_name;
      state.storeDetailInfo.phone = action.payload.phone;
      state.storeDetailInfo.road_address_name =
        action.payload.road_address_name;
      state.storeDetailInfo.address_name = action.payload.address_name;
      state.storeDetailInfo.category_group_name =
        action.payload.category_group_name;
      state.storeDetailInfo.distance = action.payload.distance;
      state.storeDetailInfo.pays = action.payload.pays;
      state.storeDetailInfo.x = action.payload.x;
      state.storeDetailInfo.y = action.payload.y;
    },
    SET_DETAIL_FLAG(state, action: PayloadAction<boolean>) {
      state.storeDetailFlag = action.payload;
    },
    SET_STORE_IN_DISTANCE(state, action: PayloadAction<any>) {
      state.storeInDistance = action.payload;
    },
    _SET_STORE_IN_DISTANCE(state, action: PayloadAction<any>) {
      state._storeInDistance = action.payload;
    },
    SET_SEARCH_WORD(state, action: PayloadAction<string>) {
      state.searchWord = action.payload;
    },
    SET_MY_ADDRESS(state, action: PayloadAction<string>) {
      state.myAddress = action.payload;
    },
  },
});

export const {
  SET_MY_LOCATION,
  SET_LAST_LOCATION,
  SET_DETAIL_INFO,
  SET_DETAIL_FLAG,
  SET_STORE_IN_DISTANCE,
  _SET_STORE_IN_DISTANCE,
  SET_SEARCH_WORD,
  SET_MY_ADDRESS,
} = playApp.actions;

export default playApp;
