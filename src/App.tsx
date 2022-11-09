// react, router, mobx
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import WelcomePage from "./pages/Welcome";
import ApplicationPage from "./pages/Application";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/app" element={<ApplicationPage />} />
    </Routes>
  );
}
