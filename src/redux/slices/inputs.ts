import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  searchInputValue: string;
  catalogKey: string;
  payment_from: string;
  payment_to: string;
};
const initialState: InitialStateType = {
  searchInputValue: '',
  catalogKey: '',
  payment_from: '',
  payment_to: '',
};

const slice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    changeVacancyInput(state, action: PayloadAction<string>) {
      state.searchInputValue = action.payload;
    },
    changeCatalogKeyInput(state, action: PayloadAction<string>) {
      state.catalogKey = action.payload;
    },
    changeSalaryFromInput(state, action: PayloadAction<string>) {
      state.payment_from = action.payload;
    },
    changeSalaryToInput(state, action: PayloadAction<string>) {
      state.payment_to = action.payload;
    },
  },
});

export const {
  changeVacancyInput,
  changeCatalogKeyInput,
  changeSalaryFromInput,
  changeSalaryToInput,
} = slice.actions;
export default slice.reducer;
