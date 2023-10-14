import { createReducer } from '@reduxjs/toolkit';

export const liveReducer = createReducer(
  {
    message: null,
    error: null,
    lives: [],
    liveDetails: null
  },
  {
    createLiveRequest: state => {
        state.loading = true;
    },
    createLiveSuccess: (state, action) => {
      state.message = action.payload.message;
    },
    createLiveFail: (state, action) => {
      state.error = action.payload;
    },

    getLivesRequest: state => {
        state.loading = true;
    },
    getLivesSuccess: (state, action) => {
      state.lives = action.payload;
    },
    getLivesFail: (state, action) => {
      state.error = action.payload;
    },

    getLivesDetailsRequest: state => {
        state.loading = true;
    },
    getLivesDetailsSuccess: (state, action) => {
      state.liveDetails = action.payload;
    },
    getLivesDetailsFail: (state, action) => {
      state.error = action.payload;
    },


    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);