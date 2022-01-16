import { createSlice } from "@reduxjs/toolkit";

const backReducer = createSlice({
  name: "backReducer",
  initialState: {
    dataFile: [],
  },
  reducers: {
    addData: (state, { payload }) => {
      state.dataFile = payload;
    },
  },
});

export const { addData } = backReducer.actions;

export default backReducer.reducer;
