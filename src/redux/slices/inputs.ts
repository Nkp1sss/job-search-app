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
    changeInputValue(state, action: PayloadAction<string>) {
      state.searchInputValue = action.payload;
    },
    changeInputCatalogKey(state, action: PayloadAction<string>) {
      state.catalogKey = action.payload;
    },
    changeInputPaymentFrom(state, action: PayloadAction<string>) {
      state.payment_from = action.payload;
    },
    changeInputPaymentTo(state, action: PayloadAction<string>) {
      state.payment_to = action.payload;
    },
  },
});

export const {
  changeInputValue,
  changeInputCatalogKey,
  changeInputPaymentFrom,
  changeInputPaymentTo,
} = slice.actions;
export default slice.reducer;
