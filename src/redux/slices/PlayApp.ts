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
  choiceCategory: {
    store: Array<string>;
    pay: Array<string>;
  };
  choiceCnt: {
    storeCnt: number;
    payCnt: number;
  };
  filterShowFlag: Boolean;
  filterApplyFlag: Boolean;
  filterStore: Array<any>;
  searchFlag: boolean;
  searchStore: Array<any>;
  searchWord: string | undefined;
  myAddress: string | undefined;
  mobileShowStoreFlag: boolean;
  mobileShowSearchFlag: boolean;
  appVisitAlertFlag: boolean;
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
  choiceCategory: {
    store: [],
    pay: [],
  },
  choiceCnt: {
    storeCnt: 0,
    payCnt: 0,
  },
  filterShowFlag: false,
  filterApplyFlag: false,
  filterStore: [],
  searchFlag: false,
  searchStore: [],
  searchWord: undefined,
  myAddress: undefined,
  mobileShowStoreFlag: false,
  mobileShowSearchFlag: true,
  appVisitAlertFlag: true,
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
    SET_CHOICE_CATEGORY(state, action: PayloadAction<any>) {
      state.choiceCategory.store = action.payload.store;
      state.choiceCategory.pay = action.payload.pay;
    },
    SET_CHOICE_CNT(state, action: PayloadAction<any>) {
      state.choiceCnt.storeCnt = action.payload.storeCnt;
      state.choiceCnt.payCnt = action.payload.payCnt;
    },
    SET_FILTER_SHOW_FLAG(state, action: PayloadAction<boolean>) {
      state.filterShowFlag = action.payload;
    },
    SET_FILTER_APPLY_FLAG(state, action: PayloadAction<boolean>) {
      state.filterApplyFlag = action.payload;
    },
    SET_FILTER_STORE(state, action: PayloadAction<any>) {
      state.filterStore = action.payload;
    },
    SET_SEARCH_FLAG(state, action: PayloadAction<boolean>) {
      state.searchFlag = action.payload;
    },
    SET_SEARCH_STORE(state, action: PayloadAction<any>) {
      state.searchStore = action.payload;
    },
    SET_SEARCH_WORD(state, action: PayloadAction<string>) {
      state.searchWord = action.payload;
    },
    SET_MY_ADDRESS(state, action: PayloadAction<string>) {
      state.myAddress = action.payload;
    },
    SET_MOBILE_SHOW_STORE_FLAG(state, action: PayloadAction<boolean>) {
      state.mobileShowStoreFlag = action.payload;
    },
    SET_MOBILE_SHOW_SEARCH_FLAG(state, action: PayloadAction<boolean>) {
      state.mobileShowSearchFlag = action.payload;
    },
    SET_APP_VISIT_ALERT_FLAG(state, action: PayloadAction<boolean>) {
      state.appVisitAlertFlag = action.payload;
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
  SET_CHOICE_CATEGORY,
  SET_CHOICE_CNT,
  SET_FILTER_SHOW_FLAG,
  SET_FILTER_APPLY_FLAG,
  SET_FILTER_STORE,
  SET_SEARCH_FLAG,
  SET_SEARCH_STORE,
  SET_SEARCH_WORD,
  SET_MY_ADDRESS,
  SET_MOBILE_SHOW_STORE_FLAG,
  SET_MOBILE_SHOW_SEARCH_FLAG,
  SET_APP_VISIT_ALERT_FLAG,
} = playApp.actions;

export default playApp;
