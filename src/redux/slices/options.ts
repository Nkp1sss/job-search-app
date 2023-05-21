import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  page: number;
  searchVacancyName: string;
};
const initialState: InitialStateType = {
  page: 1,
  searchVacancyName: '',
};

const slice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchVacancyName = action.payload;
    },
  },
});

export const { changePage, changeSearchValue } = slice.actions;
export default slice.reducer;
