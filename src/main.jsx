import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import { ToastContainer } from "react-toastify";
import  { ThemeProvider } from "./contexts/ThemeContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       <ThemeProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>

    <ToastContainer />
  </StrictMode>
);
