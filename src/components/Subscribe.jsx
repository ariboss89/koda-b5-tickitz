import React from "react";

function Subscribe() {
  return (
    <>
      <div className="px-20 my-10">
        <div className="relative flex flex-col justify-center items-center gap-10 bg-blue-600 p-20 rounded-lg overflow-hidden">
          <p className="font-mulish text-5xl text-white">
            Subsribe to our newsletter
          </p>
          <div>
            <form className="flex gap-2">
              <input
                className="font-mulish border-2 border-solid border-white p-2 rounded-sm text-white placeholder-white font-light"
                type="text"
                placeholder="First name"
              />
              <input
                className="font-mulish border-2 border-solid border-white p-2 rounded-sm text-white placeholder-white font-light"
                type="text"
                placeholder="Email address"
              />
              <button
                className="border-2 border-solid border-white text-primary font-mulish font-bold bg-white p-2 rounded-lg text-primaryfont-light cursor-pointer px-15"
                type="button"
              >
                Subscribe Now
              </button>
            </form>

            <div className="flex absolute justify-center items-center border-5 border-white bg-blue-600 rounded-full h-50 w-50 -right-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
