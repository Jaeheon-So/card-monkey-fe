import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Header />
      <main style={{ marginBottom: "70px" }}>
        <Outlet />
      </main>
      <Navbar />
    </>
  );
};

export default App;
