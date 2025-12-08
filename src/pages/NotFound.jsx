import React from "react";

import NtFnd from "../assets/404.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <img src={NtFnd} alt="not found" />
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
