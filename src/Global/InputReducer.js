import { createSlice } from "@reduxjs/toolkit";

const InputReducer = createSlice({
  name: "inputReducer",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    myName: (state, { payload }) => {
      state.name = payload;
    },
    myEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
});

export const { myEmail, myName } = InputReducer.actions;
export default InputReducer.reducer;
