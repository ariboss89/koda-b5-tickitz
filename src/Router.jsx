import React from "react";
import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ViewAll from "./pages/ViewAll";
import Register from "./pages/Register";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Movies from "./components/Movies";
import DetailMovie from "./pages/DetailMovie";
import BuyTicket from "./pages/BuyTicket";
import PaymentInfo from "./pages/PaymentInfo";
import TicketResult from "./pages/TicketResult";
import TestingFetch from "./pages/TestingFetch";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/" element={<TestingFetch />}> */}
        <Route index element={<Home />} />
        <Route path="movies">
          <Route index element={<ViewAll />} />
          <Route path=":id/:slug" element={<DetailMovie />} />
          <Route path="buyticket/:id/:slug" element={<BuyTicket />} />
          <Route path="payment/:id/:slug" element={<PaymentInfo />} />
          <Route path="ticketresult/:id/:slug" element={<TicketResult />} />
        </Route>
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
