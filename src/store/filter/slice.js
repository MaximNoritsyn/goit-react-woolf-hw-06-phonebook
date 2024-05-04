import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    setStatusFilter(state, {payload}) {
      state = payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
