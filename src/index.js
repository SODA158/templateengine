import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "./components/StaticComponents";
import { Provider } from "react-redux";
import  store  from "./components/store/DocumentBodyStore";

// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const rootElementHeader = document.getElementById("header");
const rootHeader = createRoot(rootElementHeader);
const rootElementFooter = document.getElementById("footer");
const rootFooter = createRoot(rootElementFooter);

rootHeader.render(<Header />);

root.render(
  <StrictMode>
    <BrowserRouter basename="">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

rootFooter.render(<Footer />);
