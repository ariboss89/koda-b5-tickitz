import React from "react";
import Logo from "../assets/logo.png";

function TicketResult() {
  return (
    <>
      <section>
        <div>
          <div className="relative flex min-h-screen items-center justify-center bg-[url(../assets/bg.png)] bg-cover bg-center after:absolute after:inset-0 after:z-10 after:bg-black/70 w-6/10"></div>
          <div className="absolute top-1/3 flex justify-center items-start w-6/10">
            <div className="flex flex-col w-8/10 items-start">
              <img src={Logo} alt="ok" className="z-10 w-1/3" />
              <p className="text-white font-mulish font-bold text-5xl z-10 w-full">
                Thankyou For Purchasing
              </p>
              <p className="text-2xl text-white font-mulish font-light">
                Hope you enjoy the movies and come back to see us again
              </p>
              <p className="text-lg font-bold text-white z-10 font-mulish">
                Please Download Your Ticket{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TicketResult;
