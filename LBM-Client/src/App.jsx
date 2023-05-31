import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound/NotFound";
// import Dashboard from "./components/Dashboards/Dashboard";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import {
  Route,
  Routes,
  useLocation,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Landing/Home/Home";
import Dash from "./components/Dashboards/Dash/Dash";
import RealEstates from "./components/RealEstates";
import React, { useEffect, useState } from "react";
import Modals from "./components/Dashboards/Modals/Modals";
import Web3 from "web3";
import Governance from "./components/Governance/Governance";
import Vaults from "./components/Vaults/Vaults";
import RealEstateDetail from "./components/RealEstateDetail/index";
import SideBarMobile from "./components/SideBar/mobile/SideBarMobile";
import CoomingSoon from "./components/ComingSoon/ComingSoon";
//import Launchpad from "./components/Launchpad/Launchpad";
//import ProductPage from "./components/Launchpad/ProductPage/ProductPage";
import GovernanceDetails from "./components/Governance/GovernanceDetails/GovernanceDetails";
import Marketplace from "./components/MarketPlace/Marketplace";
import Details from "./components/MarketPlace/Details/Details";
import NavbarMarket from "./components/Landing/NavBar/NavbarMarket/NavbarMarket";
import { useModal } from "./helpers/useModal/useModal";
//import WarningBuilding from "./components/WarningBuilding";
import AdminMenu from "./components/Admin/AdminMenu/AdminMenu";
import { useAccount } from "wagmi";
import { getAdminByWallet, getUnapprovedProjects } from "../redux/actions";
import { setIsAdmin } from "../redux/reducer";
import SupportCenter from "./components/SupportCenter/SupportCenter";
import DetailSupport from "./components/DetailSupport/DetailSupport";
import Cards from "../src/components/Cards/Cards";

import IDO from "./components/IDO/IDO";
function App() {
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModal();
  const { address } = useAccount();
  const { selectedIcon, walletPopUp, adminWallet, isAdmin } = useSelector(
    (state) => state.reducerCompleto
  );
  const AppLayout = () => (
    <>
      {/* <div className="bgImage">
        <img src="./icons/Background.svg" />
      </div> */}
      {/* <WarningBuilding isOpen={isOpenModal} closeModal={closeModal} /> */}
      <Modals state={stateModal} setStateModal={setStateModal} />

      <div className="SideBar">
        <NavbarMarket />
      </div>
      <Outlet />
    </>
  );

  useEffect(() => {
    openModal();
    dispatch(getAdminByWallet(address));
    dispatch(setIsAdmin(adminWallet.length ? true : false));
    isAdmin ? dispatch(getUnapprovedProjects()) : null;
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={
              <div className="Page">
                <Dash setStateModal={setStateModal} />
              </div>
            }
          />
          <Route
            path="/vaults"
            element={
              <div className="Page">
                <Vaults />
              </div>
            }
          />
          <Route
            path={"/realestate"}
            element={
              <div className="Page">
                <RealEstates />
              </div>
            }
          />
          <Route
            path={"/realestate/:id"}
            element={
              <div className="Page">
                <RealEstateDetail />
              </div>
            }
          />
          <Route
            path={"/marketplace/:id"}
            element={
              <div className="Page" style={{ flexDirection: "column" }}>
                <Details />
              </div>
            }
          />
          {/* <Route
            path={"/launchpad"}
            element={
              <div className="Page">
                <IDO />
              </div>
            }
          /> */}
          <Route
            path="/governance"
            element={
              <div className="Page">
                <Governance />
              </div>
            }
          />
          <Route
            path="/governance/id"
            element={
              <div className="Page">
                <GovernanceDetails />
              </div>
            }
          />
          {/* <Route
            path={"/product"}
            element={
              <div className="Page">
                <ProductPage />
              </div>
            }
          /> */}
          <Route
            path={"/admin"}
            element={
              <div className="Page">
                <AdminMenu />
              </div>
            }
          />
          <Route
            path="/marketplace"
            element={
              <div className="Page">
                <Marketplace />
              </div>
            }
          />

          {/* Dentro de este Route van todas las cosas que tengan sidebar */}
        </Route>
        <Route path="/swap" element={<CoomingSoon />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/support" element={<SupportCenter />} />
        <Route path="/detail/:id" element={<DetailSupport />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}
//Check

export default App;
