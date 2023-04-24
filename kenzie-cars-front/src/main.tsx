import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../src/globalStyles/style";
import App from "./App";
import { ModalProvider } from "./context/modal.context";
import { CarsProvider } from "./context/cars.context";
import { UserProvider } from "./context/user.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <UserProvider>
          <CarsProvider>
            <GlobalStyle />
            <App />
          </CarsProvider>
        </UserProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
