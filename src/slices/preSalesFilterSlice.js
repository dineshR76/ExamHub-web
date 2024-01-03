import { createSlice } from "@reduxjs/toolkit";

const preSalesFilterSlice = createSlice({
  name: "PreSalesFilterSlice",
  initialState: {
    storedFilters: {},
    storedStartDate: null,
    storeEndDate: null,
  },
  reducers: {
    preSalesFilterStore: (state, action) => {
      state.storedFilters = action.payload.storedFilters;
      state.storedStartDate = action.payload.storedStartDate;
      state.storeEndDate = action.payload.storeEndDate;
      
    },
  },
});
export const { preSalesFilterStore } = preSalesFilterSlice.actions;

export default preSalesFilterSlice.reducer;
