import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { LoginPage } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { UserGeneralDetails } from "./pages/userGeneralDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userGeneralDetails" element={<UserGeneralDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
