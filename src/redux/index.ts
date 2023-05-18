import { configureStore } from '@reduxjs/toolkit';
import CataloguesReducer from './slices/catalogues';

const store = configureStore({
  reducer: {
    [CataloguesReducer.reducerPath]: CataloguesReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CataloguesReducer.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
