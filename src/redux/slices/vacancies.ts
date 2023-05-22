import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MAX_VACANCIES } from '../../constants';

type InitialStateType = {
  total: number;
};
const initialState: InitialStateType = {
  total: MAX_VACANCIES,
};

const slice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    changeTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
  },
});

export const { changeTotal } = slice.actions;
export default slice.reducer;
