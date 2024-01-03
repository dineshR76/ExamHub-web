import { createSlice } from "@reduxjs/toolkit";

const preSalesSearchSlice = createSlice({
  name: "PreSalesSearchSlice",
  initialState: {
    storedSearchInput: "",
  },
  reducers: {
    preSalesSearchStore: (state, action) => {
      state.storedSearchInput = action.payload.storedSearchInput;
      
    },
  },
});
export const { preSalesSearchStore } = preSalesSearchSlice.actions;

export default preSalesSearchSlice.reducer;
