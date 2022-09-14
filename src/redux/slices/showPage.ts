import { createSlice } from '@reduxjs/toolkit';

export interface ShowPageState {
  page: string | undefined;
}

const initialState: ShowPageState = {
  page: document.location.pathname.substring(1),
};

export const showPage = createSlice({
  name: 'page',
  initialState,
  reducers: {
    initialPage: state => {
      state.page = '';
    },
    noticePage: state => {
      state.page = 'notice';
    },
    faqPage: state => {
      state.page = 'faq';
    },
    playAppPage: state => {
      state.page = 'playapp';
    },
    consentPage: state => {
      state.page = 'consent';
    },
    policyPage: state => {
      state.page = 'policy';
    },
  },
});

export const {
  initialPage,
  noticePage,
  faqPage,
  playAppPage,
  consentPage,
  policyPage,
} = showPage.actions;

export default showPage;
