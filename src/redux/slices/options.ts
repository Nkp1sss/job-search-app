import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  page: number;
  searchVacancyName: string;
  catalogKey: string;
  payment_from: string;
  payment_to: string;
};
const initialState: InitialStateType = {
  page: 1,
  searchVacancyName: '',
  catalogKey: '',
  payment_from: '',
  payment_to: '',
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
    changeCatalogKey(state, action: PayloadAction<string>) {
      state.catalogKey = action.payload;
    },
    changePaymentFrom(state, action: PayloadAction<string>) {
      state.payment_from = action.payload;
    },
    changePaymentTo(state, action: PayloadAction<string>) {
      state.payment_to = action.payload;
    },
  },
});

export const {
  changePage,
  changeSearchValue,
  changeCatalogKey,
  changePaymentFrom,
  changePaymentTo,
} = slice.actions;
export default slice.reducer;
