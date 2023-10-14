import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/user';
import { liveReducer } from './reducers/lives';

const store = configureStore({
  reducer: {
    user: userReducer,
    live: liveReducer
  },
});

export default store;