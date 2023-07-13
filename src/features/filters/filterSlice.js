import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { addStatus } = filterSlice.actions;
