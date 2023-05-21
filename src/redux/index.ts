import { configureStore } from '@reduxjs/toolkit';
import SuperjobReducer from './slices/SuperjobAPI';
import VacanciesReducer from './slices/vacancies';
import PaginationReducer from './slices/pagination';

const store = configureStore({
  reducer: {
    vacancies: VacanciesReducer,
    pagination: PaginationReducer,
    [SuperjobReducer.reducerPath]: SuperjobReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SuperjobReducer.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
