import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Hero from "../assets/bg.png";
import Movies from "../components/Movies";
import { useSearchParams } from "react-router";

function ViewAll() {
  const [filter, setFilter] = useState("Thriller");
  const [movies, setMovies] = useState([]);
  const [maxMovies, setMaxMovies] = useState(0);
  const [previousFilm, setPreviousFilm] = useState(0);
  const [nextFilm, setNextFilm] = useState(12);
  const [_, setSearchParam] = useSearchParams();

  async function GetFilm(start, end) {
    try {
      const url = `${import.meta.env.VITE_MOVIE_API}?api_key=${
        import.meta.env.VITE_MOVIE_KEY
      }`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`${response.status}:${response.statusText}`);

      const data = await response.json();
      setMaxMovies(data.results.length);

      const newMovies = data.results.slice(start, end).map((item) => {
        return {
          item,
        };
      });
      setMovies(newMovies);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetFilm(previousFilm, nextFilm);
  }, [previousFilm, nextFilm]);

  function next() {
    if (nextFilm < maxMovies) {
      setNextFilm(nextFilm + 12);
      setPreviousFilm(previousFilm + 12);
    }
  }

  function previous() {
    if (previousFilm > 0) {
      setNextFilm(nextFilm - 12);
      setPreviousFilm(previousFilm - 12);
    }
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <section>
            <div className="relative w-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center w-full h-[430px]">
              <div className="absolute inset-0 bg-black/60 "></div>
            </div>
          </section>
          <section>
            <div className="flex">
              <div className="flex flex-col px-25 mt-10">
                <p className="font-mulish text-secondary text- font-semibold">
                  Find Event{" "}
                </p>
                <div className="mt-5 w-full  flex justify-between items-center pl-2 border border-[#DEDEDE] rounded-sm">
                  <button>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.73856"
                        cy="9.73856"
                        r="8.98856"
                        stroke="#A0A3BD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.9902 16.457L19.5143 19.9719"
                        stroke="#A0A3BD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    {/* {showPassword == "password" ? (
                     
                    ) : (
                      <img className="w-8 h-8" src={eyeSlash} />
                    )} */}
                  </button>
                  <input
                    id="text"
                    name="find"
                    // type={showPassword ? "text" : "password"}
                    // value={form.password}
                    // onChange={onChangeHandler}
                    className="h-10 w-full rounded-xs pl-5 outline-none"
                    placeholder="New Born Expert"
                  />
                </div>
              </div>
              <div className="flex flex-col px-20 mt-10">
                <p className="font-mulish text-secondary text- font-semibold">
                  Filter{" "}
                </p>
                <div className="mt-5 w-full  flex justify-between items-center rounded-md gap-2">
                  <input
                    id="text"
                    type="button"
                    name="search"
                    onClick={(e) => {
                      setFilter(e.target.name);
                      setSearchParam(
                        new URLSearchParams({ [e.target.name]: e.target.value })
                      );
                    }}
                    className={
                      filter == "Thriller"
                        ? "h-10 w-full py-2 px-5 outline-none rounded-md bg-primary text-white"
                        : "h-10 w-full py-2 px-5 outline-none rounded-md text-secondary hover:bg-primary hover:text-white"
                    }
                    value={"Thriller"}
                  />
                  <input
                    id="text"
                    type="button"
                    name="search"
                    onClick={(e) => {
                      setFilter(e.target.value);
                      setSearchParam(
                        new URLSearchParams({ [e.target.name]: e.target.value })
                      );
                    }}
                    className={
                      filter == "Horror"
                        ? "h-10 w-full py-2 px-5 outline-none rounded-md bg-primary text-white"
                        : "h-10 w-full py-2 px-5 outline-none rounded-md text-secondary hover:bg-primary hover:text-white"
                    }
                    value={"Horror"}
                  />
                  <input
                    id="text"
                    type="button"
                    name="searcb"
                    onClick={(e) => {
                      setFilter(e.target.value);
                      setSearchParam(
                        new URLSearchParams({ [e.target.name]: e.target.value })
                      );
                    }}
                    className={
                      filter == "Romantic"
                        ? "h-10 w-full py-2 px-5 outline-none rounded-md bg-primary text-white"
                        : "h-10 w-full py-2 px-5 outline-none rounded-md text-secondary hover:bg-primary hover:text-white"
                    }
                    value={"Romantic"}
                  />
                  <input
                    id="text"
                    type="button"
                    name="search"
                    onClick={(e) => {
                      setFilter(e.target.value);
                      setSearchParam(
                        new URLSearchParams({ [e.target.name]: e.target.value })
                      );
                    }}
                    className={
                      filter == "Adventure"
                        ? "h-10 w-full py-2 px-5 outline-none rounded-md bg-primary text-white"
                        : "h-10 w-full py-2 px-5 outline-none rounded-md text-secondary hover:bg-primary hover:text-white"
                    }
                    value={"Adventure"}
                  />
                  <input
                    id="text"
                    type="button"
                    name="search"
                    onClick={(e) => {
                      setFilter(e.target.value);
                      setSearchParam(
                        new URLSearchParams({ [e.target.name]: e.target.value })
                      );
                    }}
                    className={
                      filter == "Sci-Fi"
                        ? "h-10 w-full py-2 px-5 outline-none rounded-md bg-primary text-white"
                        : "h-10 w-full py-2 px-5 outline-none rounded-md text-secondary hover:bg-primary hover:text-white"
                    }
                    value={"Sci-Fi"}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 px-20 gap-5 mt-10 ">
              <Movies movies={movies} />
            </div>
            <div className="flex justify-center items-center gap-2 w-full mt-10">
              <div
                className="flex justify-center items-center bg-primary rounded-full h-10 w-10 cursor-pointer"
                onClick={previous}
              >
                <p className="font-mulish text-white">1</p>
              </div>
              <div
                className="flex justify-center items-center bg-[#F9FAFB] rounded-full h-10 w-10 cursor-pointer"
                onClick={next}
              >
                <p className="font-mulish text-secondary">2</p>
              </div>
              <div className="flex justify-center items-center bg-primary rounded-full h-10 w-10 cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 10L2.5 10"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 5L17.5 10L12.5 15"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </section>
          <section>
            <Subscribe />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ViewAll;
