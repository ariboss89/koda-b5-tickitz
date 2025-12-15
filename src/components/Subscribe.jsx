import React from "react";

function Subscribe() {
  return (
    <>
      <div className="px-10 my-10 md:px-20">
        <div className="relative flex flex-col justify-center items-center gap-10 p-10 bg-blue-600 rounded-lg overflow-hidden md:p-5">
          <p className="font-mulish text-white text-[32px] text-center md:text-5xl md:text-left md:mt-10">
            Subsribe to our newsletter
          </p>
          <div>
            <form className="flex flex-col justify-center items-center gap-2 md:flex-row md:mb-20">
              <input
                className="font-mulish border-2 border-solid border-white p-2 rounded-sm text-white placeholder-white font-light h-fit w-full"
                type="text"
                placeholder="First name"
              />
              <input
                className="font-mulish border-2 border-solid border-white p-2 rounded-sm text-white placeholder-white font-light h-fit w-full"
                type="text"
                placeholder="Email address"
              />
              <button
                className="border-2 border-solid border-white text-primary font-mulish font-bold bg-white p-2 rounded-lg cursor-pointer px-15 mb-20 md:0 w-full md:mb-0 h-fit"
                type="button"
              >
                Subscribe Now
              </button>
            </form>

            <div className="flex absolute justify-center items-center border-5 border-white bg-blue-600 rounded-full h-50 w-50 -right-25 -bottom-30 md:h-50 md:w-50 md:-right-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
