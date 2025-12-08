import React from "react";
import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";
import Register from "./pages/Register";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Movies" element={<ViewAll />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
