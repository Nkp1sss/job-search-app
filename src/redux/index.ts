import { configureStore } from '@reduxjs/toolkit';
import SuperjobReducer from './slices/SuperjobAPI';

const store = configureStore({
  reducer: {
    [SuperjobReducer.reducerPath]: SuperjobReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SuperjobReducer.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
