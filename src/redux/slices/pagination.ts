import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  page: number;
};
const initialState: InitialStateType = {
  page: 1,
};

const slice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { changePage } = slice.actions;
export default slice.reducer;
