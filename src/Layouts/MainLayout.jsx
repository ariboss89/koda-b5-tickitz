import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import { Outlet } from "react-router";
import useWindowWidth from "../hooks/useWindowWidth";

function MainLayout() {
  const width = useWindowWidth();
  const breakpoint = 768;

  return (
    <div>
      <Header />
      <Outlet />
      {width > breakpoint ? <Footer /> : <FooterMobile />}
    </div>
  );
}

export default MainLayout;
