import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedIcon: "",
  walletPopUp: false,
  containerRedux: false,
  currency: "USD - $",
  isAdmin: false,
  allProjects: [],
  filteredProjects: [],
  addProject: false,
  aboutProject: "",
  unapprovedProjects: [],
  adminWallet: [],
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
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setAllProjects: (state, action) => {
      state.allProjects = action.payload;
    },
    setUnapprovedProjects: (state, action) => {
      state.unapprovedProjects = action.payload;
    },
    setFilteredProjects: (state, action) => {
      state.filteredProjects = action.payload;
    },
    setAddProject: (state, action) => {
      state.addProject = action.payload;
    },
    setAboutProject: (state, action) => {
      state.aboutProject = action.payload;
    },
    setAdminWallet: (state, action) => {
      state.adminWallet = action.payload;
    },
  },
});

export const {
  setSelectedIcon,
  setWalletPopUp,
  setContainerRedux,
  setCurrency,
  setIsAdmin,
  setAllProjects,
  setFilteredProjects,
  setAddProject,
  setAboutProject,
  setUnapprovedProjects,
  setAdminWallet,
} = appSlice.actions;

export default appSlice.reducer;
