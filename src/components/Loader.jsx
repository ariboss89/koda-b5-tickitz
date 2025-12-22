import React from "react";

function Loader() {
  return (
    <div>
      <div className="flex w-full flex-row items-center justify-center gap-2">
        <div className="flex animate-bounce items-center justify-center text-xl font-bold [animation-delay:-.3s]">
          Please wait{" "}
        </div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.3s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}

export default Loader;
