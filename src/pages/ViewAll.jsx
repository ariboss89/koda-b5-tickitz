import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Hero from "../assets/bg.png";
import Movies from "../components/Movies";
import MoviesFilter from "../components/MoviesFilter";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../redux/slices/movies.slice";

function ViewAll() {
  const [filter, setFilter] = useState("Thriller");
  const [movies, setMovies] = useState([]);
  const [maxMovies, setMaxMovies] = useState(0);
  const [previousFilm, setPreviousFilm] = useState(0);
  const [nextFilm, setNextFilm] = useState(12);
  const [_, setSearchParam] = useSearchParams([]);
  const [query, setQuery] = useState({
    genre: "",
  });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();

  const [param, setParam] = useState({
    search: "",
    page: 1,
  });

  const moviesState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getGenreMoviesThunk());
  }, []);

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

  const genres = moviesState.genre.genres;

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

  const onKeyDownHandler = (e) => {
    setParam((param) => {
      return { ...param, [e.target.name]: e.target.value };
    });
    setSearchParam(new URLSearchParams(param));
  };

  useEffect(() => {
    dispatch(movieActions.getMoviesByNameThunk(param));
  }, [param]);

  const movF = moviesState.search.results;
  console.log(movF, "hasil filter movienya");

  const onCheckedHandler = (e) => {
    if (e.target.checked === true) {
      // seat.push(e.target.value);
      // console.log(seat, "kursinya");
      console.log(query.genre, "aaa");
      setQuery((query) => {
        return { ...query, [e.target.name]: e.target.value };
      });
    }
    // else {
    //   for (let a = 0; a < seat.length; a++) {
    //     if (seat[a] == e.target.value) {
    //       seat.splice(a);
    //     }
    //   }
    // }
    // let total = seat.length * 35000;
    // setOrder((order) => {
    //   return { ...order, seat, total };
    // });
  };

  return (
    <>
      <div>
        <Header />
        <main>
          <section>
            <div className="relative h-[430px] w-screen overflow-y-hidden bg-[url(/src/assets/bg.png)] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute top-1/3 flex w-[60vw] flex-col px-20">
                <p className="font-mulish text-lg font-bold text-white">
                  LIST MOVIE OF THE WEEK
                </p>
                <p className="font-mulish text-5xl font-semibold text-white">
                  Experience the Magic of Cinema: Book Your Tickets Today
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col md:flex-row">
              <div className="mt-10 flex w-full flex-col items-start justify-between px-20 md:w-3/5 md:flex-col lg:min-w-2/5">
                <p className="font-mulish text-secondary text-left font-semibold">
                  Find Event{" "}
                </p>
                <div className="mt-5 flex w-full items-center justify-between rounded-sm border border-[#DEDEDE] pl-2 md:min-w-full">
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
                    name="search"
                    // type={showPassword ? "text" : "password"}
                    // value={form.password}
                    // onChange={onChangeHandler}
                    className="h-10 w-full rounded-xs pl-5 outline-none md:w-full"
                    placeholder="New Born Expert"
                    onChange={onKeyDownHandler}
                  />
                </div>
              </div>
              <div className="mt-10 flex w-full flex-col px-20 md:w-2/5 lg:min-w-3/5">
                <p className="font-mulish text-secondary text- font-semibold">
                  Filter{" "}
                </p>
                <div className="mt-5 flex items-center justify-between gap-2 overflow-x-scroll rounded-md">
                  {genres &&
                    genres.map((genre, idx) => {
                      return (
                        <input
                          key={idx}
                          id="text"
                          type="button"
                          name="genre"
                          onClick={(e) => {
                            setFilter(e.target.value);
                            setSearchParam(
                              new URLSearchParams({
                                [e.target.name]: e.target.value,
                              }),
                            );
                          }}
                          className={
                            filter != ""
                              ? "bg-primary h-10 w-full rounded-md px-5 py-2 text-white outline-none"
                              : "text-secondary hover:bg-primary h-10 w-full rounded-md px-5 py-2 outline-none hover:text-white"
                          }
                          value={genre.name}
                        />
                      );
                    })}

                  {/* <input
                  //   id="text"
                  //   type="button"
                  //   name="search"
                  //   onClick={(e) => {
                  //     setFilter(e.target.value);
                  //     setSearchParam(
                  //       new URLSearchParams({
                  //         [e.target.name]: e.target.value,
                  //       }),
                  //     );
                  //   }}
                  //   className={
                  //     filter == "Horror"
                  //       ? "bg-primary h-10 w-full rounded-md px-5 py-2 text-white outline-none"
                  //       : "text-secondary hover:bg-primary h-10 w-full rounded-md px-5 py-2 outline-none hover:text-white"
                  //   }
                  //   value={"Horror"}
                  // />
                  // <input
                  //   id="text"
                  //   type="button"
                  //   name="searcb"
                  //   onClick={(e) => {
                  //     setFilter(e.target.value);
                  //     setSearchParam(
                  //       new URLSearchParams({
                  //         [e.target.name]: e.target.value,
                  //       }),
                  //     );
                  //   }}
                  //   className={
                  //     filter == "Romantic"
                  //       ? "bg-primary h-10 w-full rounded-md px-5 py-2 text-white outline-none"
                  //       : "text-secondary hover:bg-primary h-10 w-full rounded-md px-5 py-2 outline-none hover:text-white"
                  //   }
                  //   value={"Romantic"}
                  // />
                  // <input
                  //   id="text"
                  //   type="button"
                  //   name="search"
                  //   onClick={(e) => {
                  //     setFilter(e.target.value);
                  //     setSearchParam(
                  //       new URLSearchParams({
                  //         [e.target.name]: e.target.value,
                  //       }),
                  //     );
                  //   }}
                  //   className={
                  //     filter == "Adventure"
                  //       ? "bg-primary h-10 w-full rounded-md px-5 py-2 text-white outline-none"
                  //       : "text-secondary hover:bg-primary h-10 w-full rounded-md px-5 py-2 outline-none hover:text-white"
                  //   }
                  //   value={"Adventure"}
                  // />
                  // <input
                  //   id="text"
                  //   type="button"
                  //   name="search"
                  //   onClick={(e) => {
                  //     setFilter(e.target.value);
                  //     setSearchParam(
                  //       new URLSearchParams({
                  //         [e.target.name]: e.target.value,
                  //       }),
                  //     );
                  //   }}
                  //   className={
                  //     filter == "Sci-Fi"
                  //       ? "bg-primary h-10 w-full rounded-md px-5 py-2 text-white outline-none"
                  //       : "text-secondary hover:bg-primary h-10 w-full rounded-md px-5 py-2 outline-none hover:text-white"
                  //   }
                  //   value={"Sci-Fi"}
                  // /> */}
                </div>
              </div>
            </div>
            <div className="mt-10 grid w-full grid-cols-1 gap-5 px-20 md:grid-cols-2 lg:grid-cols-4">
              {param.search != "" ? <MoviesFilter /> : <Movies />}
            </div>
            <div className="mt-10 flex w-full items-center justify-center gap-2">
              {/* {moviesState.upcoming.total_pages.map((total) => {
                return (
                  <div
                    className="bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                    onClick={previous}
                  >
                    <p className="font-mulish text-white">{total}</p>
                  </div>
                );
              })} */}
              {/* <div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F9FAFB]"
                onClick={next}
              >
                <p className="font-mulish text-secondary">2</p>
              </div>
              <div className="bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
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
              </div> */}
            </div>
          </section>
          <section>
            <Subscribe />
          </section>
        </main>
      </div>
    </>
  );
}

export default ViewAll;
