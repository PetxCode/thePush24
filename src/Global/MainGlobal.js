import { createSlice } from "@reduxjs/toolkit";

const MainGlobal = createSlice({
  name: "myState",
  initialState: { value: 0 },
  reducers: {
    addCounter: (state) => {
      state.value += 1;
    },
    minusCounter: (state) => {
      state.value += 1;
    },
  },
});

export const { addCounter, minusCounter } = MainGlobal.actions;
export default MainGlobal.reducer;
