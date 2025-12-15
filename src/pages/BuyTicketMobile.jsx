import React from "react";
import Line from "../assets/line.png";
import Movie2 from "../assets/movie2.png";

function BuyTicketMobile() {
  return (
    <>
      <main>
        <section>
          {/* <div className="mt-100 px-20">
            <div className="flex justify-between align-center m5-10">
              <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-[#1D4ED8] rounded-full text-white">
                1
              </div>
              <div className="flex flex-col justify-end items-end">
                <img src={Line} alt="line 2" />
              </div>
              <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-secondary rounded-full text-white">
                2
              </div>
              <div className="flex flex-col justify-end items-end">
                <img src={Line} alt="line 2" />
              </div>
              <div className="flex flex-col justify-center items-center text-center w-32 h-15 bg-secondary rounded-full text-white">
                3
              </div>
            </div>
          </div> */}
          <div className="flex flex-col justify-between p-10 mt-20">
            <div className=" border font-light rounded-lg p-5 border-secondary">
              <div className="border font-light rounded-lg min-h-1/2">
                <img src={Movie2} />
              </div>
              <p className="font-mulish text-[20px] font-medium mt-5 mb-5 text-center">
                Spider-Man: Homecoming
              </p>
              <div className="flex flex-wrap gap-1 my-1 items-center justify-center">
                <p className="font-mulish bg-smoke text-secondary p-2 text-sm rounded-2xl select-none">
                  Action
                </p>
                <p className="font-mulish bg-smoke text-secondary p-2 text-sm rounded-2xl select-none">
                  Adventure
                </p>
              </div>

              <p className="font-mulish text-[16px] font-light mt-10 text-center">
                Regular - 13:00 PM
              </p>

              <div className="flex my-1 items-center justify-center">
                <p className="text-center font-mulish bg-secondary text-primary p-2 text-sm font-medium rounded-2xl select-none w-1/3 curson-pointer">
                  Change
                </p>
              </div>
            </div>

            <p className="font-bold font-mulish text-[18px] my-10">
              Choose Your Seat
            </p>

            <div className="h-0.5; bg-[#9570FE] rounded-full text-[#9570FE]">
              _
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default BuyTicketMobile;
