import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedIcon: "",
  walletPopUp: false,
  containerRedux: false,
  currency: "USD - $",
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
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const {
  setSelectedIcon,
  setWalletPopUp,
  setContainerRedux,
  setCurrency,
} = appSlice.actions;

export default appSlice.reducer;
