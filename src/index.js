import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "./components/StaticComponents";
// import reportWebVitals from './reportWebVitals';

// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const rootElementHeader = document.getElementById("header");
const rootHeader = createRoot(rootElementHeader);
const rootElementFooter = document.getElementById("footer");
const rootFooter = createRoot(rootElementFooter);

rootHeader.render(<Header />);

root.render(
  <BrowserRouter basename=''>
    <App />
  </BrowserRouter>
);

rootFooter.render(<Footer />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <BrowserRouter basename=''>
//       {/* <Header /> */}
//       <App />
//       {/* <Footer /> */}
//     </BrowserRouter>
//   </StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
