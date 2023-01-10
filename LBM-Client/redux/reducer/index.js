import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIcon: "",
};

export const appSlice = createSlice({
  name: "reducerAll",
  initialState,
  reducers: {
    setSelectedIcon: (state, action) => {
      state.selectedIcon = action.payload;
    },
  },
});

export const { setSelectedIcon } = appSlice.actions;

export default appSlice.reducer;
