import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/dashboard";
import { UserGeneralDetails } from "./pages/userGeneralDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserGeneralDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
