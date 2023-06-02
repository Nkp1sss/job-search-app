import { configureStore } from '@reduxjs/toolkit';

import SuperjobReducer from './slices/SuperjobAPI';
import VacanciesReducer from './slices/vacancies';
import SavedVacancies from './slices/savedVacancies';
import OptionsReducer from './slices/options';
import InputReducer from './slices/inputs';

const store = configureStore({
  reducer: {
    vacancies: VacanciesReducer,
    savedVacancies: SavedVacancies,
    options: OptionsReducer,
    inputs: InputReducer,
    [SuperjobReducer.reducerPath]: SuperjobReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SuperjobReducer.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
