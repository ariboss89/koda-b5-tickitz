import React from "react";

import NtFnd from "../assets/404.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate(`/`);
  };
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center">
        <img src={NtFnd} alt="not found" className="h-4/5" />
        <button
          onClick={backToHome}
          className="bg-smoke cursor-pointer rounded-md p-2 font-bold text-red-400"
        >
          GO TO HOME
        </button>
      </div>
    </div>
  );
}

export default NotFound;
