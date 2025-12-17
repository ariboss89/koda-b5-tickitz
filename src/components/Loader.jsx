import React from "react";

function Loader() {
  return (
    <div>
      <div class="flex flex-row items-center justify-center gap-2 bg-amber-300">
        <div class="h-4 w-4 animate-bounce rounded-full bg-blue-700"></div>
        <div class="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.3s]"></div>
        <div class="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}

export default Loader;
