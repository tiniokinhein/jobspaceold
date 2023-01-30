import React, { Suspense } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import "./i18n";
import Fallback from "./components/Common/Fallback";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

const jsxElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
)

if(rootElement.hasChildNodes()) {
  hydrateRoot(rootElement,jsxElement)
} else {
  root.render(jsxElement)
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <Suspense fallback={<Fallback />}>
//           <App />
//         </Suspense>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

reportWebVitals();