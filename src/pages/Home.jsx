import React, { useEffect, useState } from "react";
import Hero1 from "../assets/img1.png";
import Hero2 from "../assets/img2.png";
import Hero3 from "../assets/img3.png";
import Hero4 from "../assets/img4.png";
import Cs1 from "../assets/shield.png";
import Cs2 from "../assets/check.png";
import Cs3 from "../assets/bubble.png";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router";
import { movieActions } from "../redux/slices/movies.slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

function Home() {
  const [nextFilm, setNextFilm] = useState(4);
  const [previousFilm, setPreviousFilm] = useState(0);
  const [maxMovie, _] = useState(20);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(movieActions.getNowPlayingMoviesThunk());
    //dispatch(movieActions.getGenreMoviesThunk());
  }, []);

  useEffect(() => {
    dispatch(movieActions.getUpcomingMoviesThunk());
  }, [nextFilm, previousFilm]);

  function next() {
    if (nextFilm < maxMovie) {
      setNextFilm(nextFilm + 1);
      setPreviousFilm(previousFilm + 1);
      //console.log(previousFilm, nextFilm, "klik next");
    }
  }

  function previous() {
    if (previousFilm > 0) {
      setNextFilm(nextFilm - 1);
      setPreviousFilm(previousFilm - 1);
      //console.log(nextFilm, previousFilm, "klik previous");
    }
  }

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <Header />
      <main className="mt-30">
        <section>
          <div className="mt-10 mb-10 flex flex-col justify-between gap-10 md:mt-10 md:mb-10 md:flex md:flex-row md:justify-between md:gap-10">
            <div className="flex w-full flex-col justify-center gap-5 px-10 md:flex md:w-3/4 md:justify-center md:gap-5 md:pl-20">
              <p className="font-mulish text-primary text-center text-lg font-bold md:text-left">
                MOVIE TICKET PURCHASES #1 IN INDONESIA
              </p>
              <p className="font-mulish text-center text-[32px] md:text-left md:text-5xl">
                Experience the Magic of Cinema: Book Your Tickets Today
              </p>
              <p className="text-secondary text-md text-center md:text-left">
                Sign up and get the ticket with a lot of discount
              </p>
            </div>

            <div className="grid-rows h-min-1/2 md:grid-rows grid grid-cols-2 gap-2 px-10 md:grid md:grid-cols-2 md:gap-2 md:pr-20">
              <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-full rounded-l-md rounded-r-md md:h-full">
                <img src={Hero1} className="h-full min-w-1/2" />
              </div>
              <div className="col-start-1 col-end-2 row-start-2 row-end-4">
                <img src={Hero2} className="h-full min-w-1/2" />
              </div>
              <div className="col-start-2 col-end-3 row-start-1 row-end-3">
                <img src={Hero3} className="h-full min-w-1/2" />
              </div>
              <div className="col-start-2 col-end-3 row-start-3 row-end-4">
                <img src={Hero4} className="h-full min-w-1/2" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-20 mb-10 flex justify-between gap-20 md:mt-20 md:mb-10 md:flex md:flex-row md:justify-between md:gap-20">
            <div className="flex flex-col px-10 md:px-20">
              <p className="font-mulish text-primary text-center font-bold md:text-left md:text-lg">
                WHY CHOOSE US
              </p>
              <p className="font-mulish text-center text-[32px] md:text-left">
                Unleashing the Ultimate Movie Experience
              </p>
              <div className="mt-5 flex flex-col gap-10 md:flex-row">
                <div className="mt-5 flex flex-col items-center justify-center md:mt-0 md:items-start md:justify-start">
                  <div className="bg-secondary flex h-15 w-15 items-center justify-center rounded-full">
                    <img
                      src={Cs1}
                      alt="shield"
                      height={"25vh"}
                      width={"25vw"}
                    />
                  </div>
                  <p className="font-mulish mt-5 text-justify text-lg font-medium text-gray-900">
                    Guaranteed
                  </p>
                  <p className="text-secondary text-center text-[16px] md:text-justify">
                    We guaranteed your pleasure if you order your tickets at us
                    and we also provide you a guarantee if theres a hindrance in
                    your purchasing and we will give back your payment before
                    1day
                  </p>
                </div>
                <div className="mt-5 flex flex-col items-center justify-center md:mt-0 md:items-start md:justify-start">
                  <div className="bg-secondary flex h-15 w-15 items-center justify-center rounded-full">
                    <img src={Cs2} alt="check" height={"25vh"} width={"25vw"} />
                  </div>
                  <p className="font-mulish mt-5 text-justify text-lg font-medium text-gray-900">
                    Affordable
                  </p>
                  <p className="text-secondary text-center text-[16px] md:text-justify">
                    We give you our best price if you compare to another
                    ticketing application, Be Flexible with Dates: Search for
                    your favorite movies using "Tickitz"
                  </p>
                </div>
                <div className="mt-5 flex flex-col items-center justify-center md:mt-0 md:items-start md:justify-start">
                  <div className="bg-secondary flex h-15 w-15 items-center justify-center rounded-full">
                    <img
                      src={Cs3}
                      alt="bubble"
                      height={"25vh"}
                      width={"25vw"}
                    />
                  </div>
                  <p className="font-mulish mt-5 text-justify text-lg font-medium text-gray-900">
                    24/7 Customer Support
                  </p>
                  <p className="text-secondary text-center text-[16px] md:text-justify">
                    If you have problem, we ready for you to handle your's
                    inconvenient, just contact our customer service and we will
                    give you our best service
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 mb-10 flex flex-col justify-between gap-5 md:flex-row">
            <div className="flex w-full flex-col px-10 md:px-20">
              <p className="font-mulish text-primary text-center text-lg font-bold">
                MOVIES
              </p>
              <p className="font-mulish text-center text-[32px]">
                Exciting Movie That Should Be Watched Today
              </p>
              <div className="mt-5 flex min-h-101.25 min-w-full snap-x snap-mandatory items-center justify-center gap-5 overflow-x-scroll md:snap-none [&::-webkit-scrollbar]:hidden">
                {moviesState.fetchStatus.nowPlaying.isLoading == true ? (
                  <Loader />
                ) : (
                  <div className="mt-5 flex min-h-101.25 gap-2 overflow-x-scroll md:snap-none [&::-webkit-scrollbar]:hidden">
                    {moviesState.nowPlaying.slice(0, 4).map((movie, idx) => {
                      return (
                        <div
                          key={idx}
                          className="relative min-w-3/5 snap-start sm:min-w-1/2 md:min-w-2/5 lg:min-w-1/4"
                        >
                          <div className="group relative">
                            <img
                              // src={`${import.meta.env.VITE_BACKDROP_PATH}/${
                              //   movie.poster_path
                              // }`}
                              src={`${import.meta.env.VITE_MOVIE_GO_BASE}${import.meta.env.VITE_BACKDROP_PATH_IMG}${
                                movie.poster_url
                              }`}
                              alt={"gambar"}
                              className="min-h-80 min-w-full rounded-xl object-cover sm:h-96 md:h-100 lg:h-110"
                            />
                            <div className="bg-opacity-70 absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-black/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:gap-4">
                              <button
                                className="rounded-lg border-2 border-solid border-white px-12 py-2 text-sm font-semibold text-white transition hover:border-[#1a45b8] hover:bg-[#1a45b8] sm:px-16 sm:py-3 sm:text-base md:px-20"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMovieClick(movie.Id);
                                }}
                              >
                                Details
                              </button>
                              <button
                                className="rounded-lg bg-[#1a45b8] px-10 py-2 text-sm font-semibold text-white transition hover:bg-gray-100 hover:text-black sm:px-14 sm:py-3 sm:text-base md:px-17"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMovieClick(movie.Id);
                                }}
                              >
                                Buy Ticket
                              </button>
                            </div>
                          </div>
                          <p className="mt-3 line-clamp-2 text-lg font-semibold sm:mt-4 sm:text-xl md:mt-5 md:text-2xl">
                            {movie.title}
                          </p>
                          <p className="font-mulish text-primary text-lg font-bold">
                            {format(movie.release_date, "MMMM yyyy")}
                          </p>
                          <div className="my-1 flex flex-wrap gap-1">
                            {movie.genre_ids != null &&
                              movie.genre_ids.map((id, idx) => {
                                const genres = moviesState.genre.genres;
                                const newGenre =
                                  genres && genres.find((x) => x.id == id);
                                if (newGenre && newGenre.id == id) {
                                  return (
                                    <p
                                      key={idx}
                                      className="bg-smoke text-secondary rounded-2xl px-2 text-justify text-[16px] select-none"
                                    >
                                      {newGenre.name}
                                    </p>
                                  );
                                }
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer items-center justify-center gap-2">
            <p className="text-primary text-lg">
              <Link to={"/Movies"}>View All</Link>
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 10L2.5 10"
                stroke="#1D4ED8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 5L17.5 10L12.5 15"
                stroke="#1D4ED8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </section>

        <section>
          <div className="mt-20 mb-10 flex flex-col justify-between gap-5">
            <div className="flex justify-between">
              <div className="flex flex-col px-20">
                <p className="font-mulish text-primary text-center text-lg font-bold md:text-left">
                  UPCOMING MOVIES
                </p>
                <p className="font-mulish text-center text-[32px] md:text-left">
                  Exciting Movie Coming Soon
                </p>
              </div>
              <div className="hidden md:flex md:flex-row md:items-end md:justify-center md:gap-2 md:px-20">
                <div
                  className="bg-secondary flex h-15 w-15 rotate-180 cursor-pointer items-center justify-center rounded-full hover:bg-gray-500"
                  onClick={previous}
                >
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
                <div
                  className="bg-primary flex h-15 w-15 cursor-pointer items-center justify-center rounded-full hover:bg-blue-900"
                  onClick={next}
                >
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
            </div>
            <div className="md:w-min-1/4 mt-5 hidden sm:hidden md:flex md:min-h-[405px] md:gap-4 md:overflow-x-clip md:px-20 [&::-webkit-scrollbar]:hidden">
              {moviesState.upcoming != null &&
                moviesState.upcoming
                  .slice(previousFilm, nextFilm)
                  .map((movie, idx) => {
                    return (
                      <div key={idx} className={"flex min-w-[264px] flex-col"}>
                        <div className="min-h-[405px]">
                          <img
                            className="h-full rounded-md select-none"
                            src={`${import.meta.env.VITE_MOVIE_GO_BASE}${import.meta.env.VITE_BACKDROP_PATH_IMG}${
                              movie.poster_url
                            }`}
                            alt="shield"
                          />
                        </div>
                        <p className="font-mulish mt-3 text-2xl font-bold">
                          {movie.title}
                        </p>
                        <p className="font-mulish text-primary text-lg font-bold">
                          {format(movie.release_date, "MMMM yyyy")}
                        </p>
                        {/* <div className="my-1 flex flex-wrap gap-1">
                          {movie.genre_ids.map((id, idx) => {
                            const genres = moviesState.genre.genres;
                            const newGenre =
                              genres && genres.find((x) => x.id == id);

                            if (newGenre && newGenre.id == id) {
                              return (
                                <p
                                  key={idx}
                                  className="bg-smoke text-secondary rounded-2xl px-2 text-justify text-[16px] select-none"
                                >
                                  {newGenre.name}
                                </p>
                              );
                            }
                          })}
                        </div> */}
                      </div>
                    );
                  })}
            </div>
            <div className="mt-5 flex min-h-101.25 min-w-3/5 snap-center gap-4 overflow-x-scroll px-20 md:hidden [&::-webkit-scrollbar]:hidden">
              {/* <div className="mt-5 flex min-h-[405px] gap-2 overflow-x-scroll md:snap-none [&::-webkit-scrollbar]:hidden"> */}
              {moviesState.upcoming != null &&
                moviesState.upcoming.map((movie, idx) => {
                  return (
                    <div key={idx} className={"flex min-w-66 flex-col"}>
                      <div className="min-h-101.25">
                        <img
                          className="h-full rounded-md select-none"
                          src={`${import.meta.env.VITE_MOVIE_GO_BASE}${import.meta.env.VITE_BACKDROP_PATH_IMG}${
                            movie.poster_url
                          }`}
                          alt="shield"
                        />
                      </div>
                      <p className="font-mulish mt-3 line-clamp-3 text-2xl font-bold">
                        {movie.title}
                      </p>
                      <p className="font-mulish text-primary text-lg font-bold">
                        {format(movie.release_date, "MMMM yyyy")}
                      </p>
                      <div className="my-1 flex flex-wrap gap-1">
                        {movie.genre_ids != null &&
                          movie.genre_ids.map((id, idx) => {
                            const genres = moviesState.genre.genres;
                            const newGenre =
                              genres && genres.find((x) => x.id == id);

                            if (newGenre && newGenre.id == id) {
                              return (
                                <p
                                  key={idx}
                                  className="bg-smoke text-secondary rounded-2xl px-2 text-justify text-[16px] select-none"
                                >
                                  {newGenre.name}
                                </p>
                              );
                            }
                          })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        <section>
          <Subscribe />
        </section>
      </main>
    </div>
  );
}

export default Home;
