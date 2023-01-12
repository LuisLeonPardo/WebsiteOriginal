import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedIcon: "",
  walletPopUp: false,
  container: false,
};

export const appSlice = createSlice({
  name: "reducerAll",
  initialState,
  reducers: {
    setSelectedIcon: (state, action) => {
      state.selectedIcon = action.payload;
    },
    setWalletPopUp: (state, action) => {
      state.walletPopUp = action.payload;
    },
    setContainer: (state, action) => {
      state.container = action.payload;
    },
  },
});

export const { setSelectedIcon, setWalletPopUp, setContainer } =
  appSlice.actions;

export default appSlice.reducer;
