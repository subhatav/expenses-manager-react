import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const divRoot = document.getElementById("root");
const createdRoot = createRoot(divRoot);

createdRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
