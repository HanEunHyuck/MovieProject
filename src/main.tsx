// import react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import library
import { BrowserRouter } from "react-router-dom";

// import css or tsx
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
