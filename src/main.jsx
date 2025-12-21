import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import Router from "./Router.jsx";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore, { persistedStore } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      <PersistGate persistor={persistedStore}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
);
