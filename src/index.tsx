import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
import { GlobalContextProvider } from "./context/ReactContext";

const element: any= document.getElementById("root");
const root: any = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <BrowserRouter>  
    <GlobalContextProvider>
    {/* <HelmetProvider> */}
        <App />
    {/* </HelmetProvider> */}
    </GlobalContextProvider>    
    </BrowserRouter>
  </React.StrictMode>
);