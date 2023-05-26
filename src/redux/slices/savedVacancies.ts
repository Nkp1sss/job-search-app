import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDataFromLocalStorage } from '../../components/Vacancies/Vacancy/utils';

import { VacancyType } from '../../types';

type InitialStateType = {
  vacancies: VacancyType[];
};
const initialState: InitialStateType = {
  vacancies: getDataFromLocalStorage(),
};

const slice = createSlice({
  name: 'savedVacancies',
  initialState,
  reducers: {
    addVacancy(state, action: PayloadAction<VacancyType>) {
      state.vacancies.push(action.payload);
    },
    removeVacancy(state, action: PayloadAction<number>) {
      state.vacancies = state.vacancies.filter((vacancy) => vacancy.id !== action.payload);
    },
  },
});

export const { addVacancy, removeVacancy } = slice.actions;
export default slice.reducer;
