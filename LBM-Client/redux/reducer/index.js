import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedIcon: "",
  walletPopUp: false,
  containerRedux: false,
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
    setContainerRedux: (state, action) => {
      state.containerRedux = action.payload;
    },
  },
});

export const { setSelectedIcon, setWalletPopUp, setContainerRedux } =
  appSlice.actions;

export default appSlice.reducer;
