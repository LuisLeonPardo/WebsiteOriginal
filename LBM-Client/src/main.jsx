import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { Persistor } from "../redux/store/Store";
import "./index.css";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./config/web3";
//wallet imports

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={Persistor}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
