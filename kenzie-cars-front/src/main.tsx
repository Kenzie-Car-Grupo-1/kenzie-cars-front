import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../src/globalStyles/style";
import App from "./App";
import { ModalProvider } from "./context/modal.context";
import { CarsProvider } from "./context/cars.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <CarsProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </CarsProvider>
    </ModalProvider>
  </React.StrictMode>
);
