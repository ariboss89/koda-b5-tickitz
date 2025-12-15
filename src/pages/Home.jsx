import React, { useEffect, useState } from "react";
import Hero1 from "../assets/img1.png";
import Hero2 from "../assets/img2.png";
import Hero3 from "../assets/img3.png";
import Hero4 from "../assets/img4.png";
import Cs1 from "../assets/shield.png";
import Cs2 from "../assets/check.png";
import Cs3 from "../assets/bubble.png";
import Movie1 from "../assets/movie1.png";
import Movie2 from "../assets/movie2.png";
import Movie3 from "../assets/movie3.png";
import Movie4 from "../assets/movie4.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Movies from "../components/Movies";
import { format } from "date-fns";
import { Link } from "react-router";
import { movieActions } from "../redux/slices/movies.slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

function Home() {
  const [nextFilm, setNextFilm] = useState(4);
  const [previousFilm, setPreviousFilm] = useState(0);
  const [maxMovie, setMaxMovie] = useState(20);

  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(movieActions.getNowPlayingMoviesThunk());
    dispatch(movieActions.getUpcomingMoviesThunk());
  }, [nextFilm, previousFilm]);

  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Abenteuer",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Komödie",
    },
    {
      id: 80,
      name: "Krimi",
    },
    {
      id: 99,
      name: "Dokumentarfilm",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Familie",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "Historie",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Musik",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Liebesfilm",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV-Film",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Kriegsfilm",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  function next() {
    if (nextFilm < maxMovie) {
      setNextFilm(nextFilm + 1);
      setPreviousFilm(previousFilm + 1);
      console.log(previousFilm, nextFilm, "klik next");
    }
  }

  function previous() {
    if (previousFilm > 0) {
      setNextFilm(nextFilm - 1);
      setPreviousFilm(previousFilm - 1);
      console.log(nextFilm, previousFilm, "klik previous");
    }
  }

  return (
    <div>
      <Header />
      <main className="mt-30">
        <section>
          <div className="flex flex-col justify-between mt-10 mb-10 gap-10 md:flex md:flex-row md:justify-between md:mt-10 md:mb-10 md:gap-10">
            <div className="flex flex-col justify-center px-10 w-full gap-5 md:flex md:justify-center md:pl-20 md:w-3/4 md:gap-5">
              <p className="font-mulish text-center text-primary font-bold text-lg md:text-left">
                MOVIE TICKET PURCHASES #1 IN INDONESIA
              </p>
              <p className="font-mulish text-center text-[32px] md:text-5xl md:text-left">
                Experience the Magic of Cinema: Book Your Tickets Today
              </p>
              <p className="text-secondary text-center text-md md:text-left">
                Sign up and get the ticket with a lot of discount
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows px-10 h-min-1/2 gap-2 md:grid md:grid-cols-2 md:grid-rows md:pr-20 md:gap-2">
              <div
                className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-r-md rounded-l-md h-full
              md:h-full
              "
              >
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
          <div
            className="flex justify-between mt-20 mb-10 gap-20 
          md:flex md:flex-row md:justify-between md:mt-20 md:mb-10 md:gap-20"
          >
            <div className="flex flex-col px-10 md:px-20">
              <p
                className="font-mulish text-center text-primary font-bold
              md:text-lg md:text-left"
              >
                WHY CHOOSE US
              </p>
              <p className="font-mulish text-[32px] text-center md:text-left">
                Unleashing the Ultimate Movie Experience
              </p>
              <div className="flex flex-col gap-10 mt-5 md:flex-row">
                <div className="flex flex-col justify-center items-center mt-5 md:mt-0 md:justify-start md:items-start">
                  <div className="flex justify-center items-center bg-secondary rounded-full h-15 w-15">
                    <img
                      src={Cs1}
                      alt="shield"
                      height={"25vh"}
                      width={"25vw"}
                    />
                  </div>
                  <p className="text-lg font-mulish text-gray-900 font-medium mt-5 text-justify">
                    Guaranteed
                  </p>
                  <p className="text-secondary text-[16px] text-center md:text-justify ">
                    We guaranteed your pleasure if you order your tickets at us
                    and we also provide you a guarantee if theres a hindrance in
                    your purchasing and we will give back your payment before
                    1day
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 md:mt-0 md:justify-start md:items-start">
                  <div className="flex justify-center items-center bg-secondary rounded-full h-15 w-15">
                    <img src={Cs2} alt="check" height={"25vh"} width={"25vw"} />
                  </div>
                  <p className="text-lg font-mulish text-gray-900 font-medium mt-5 text-justify">
                    Affordable
                  </p>
                  <p className="text-secondary text-[16px] text-center md:text-justify">
                    We give you our best price if you compare to another
                    ticketing application, Be Flexible with Dates: Search for
                    your favorite movies using "Tickitz"
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 md:mt-0 md:justify-start md:items-start">
                  <div className="flex justify-center items-center bg-secondary rounded-full h-15 w-15">
                    <img
                      src={Cs3}
                      alt="bubble"
                      height={"25vh"}
                      width={"25vw"}
                    />
                  </div>
                  <p className="text-lg font-mulish text-gray-900 font-medium mt-5 text-justify">
                    24/7 Customer Support
                  </p>
                  <p className="text-secondary text-[16px] text-center md:text-justify">
                    If you have problem, we ready for you to handle your's
                    inconvenient, just contact our customer service and we will
                    give you our best service
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between mt-20 mb-10 gap-5 md:flex-row">
            <div className="flex flex-col px-10 md:px-20">
              <p className="font-mulish text-lg text-primary font-bold text-center">
                MOVIES
              </p>
              <p className="font-mulish text-[32px] text-center">
                Exciting Movie That Should Be Watched Today
              </p>
              <div className="flex gap-5 mt-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden snap-x snap-mandatory md:snap-none">
                {moviesState.fetchStatus.nowPlaying.isLoading == true ? (
                  <Loader />
                ) : (
                  <div className="grid grid-cols-4 mt-5 min-h-[405px] gap-4">
                    {moviesState.nowPlaying.slice(0, 4).map((movie, idx) => {
                      return (
                        <div key={idx} className="w-full relative snap-start">
                          <div className="relative group">
                            <img
                              src={`${import.meta.env.VITE_BACKDROP_PATH}/${
                                movie.poster_path
                              }`}
                              alt={"gambar"}
                              className="w-full min-h-80 sm:h-96 md:h-100 lg:h-110 rounded-xl object-cover"
                            />
                            <div className="absolute inset-0 bg-black/65 bg-opacity-70 rounded-xl flex flex-col justify-center items-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <button className="text-white border-2 border-solid border-white px-12 sm:px-16 md:px-20 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#1a45b8] hover:border-[#1a45b8] transition">
                                Details
                              </button>
                              <button className="bg-[#1a45b8] text-white px-10 sm:px-14 md:px-17 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 hover:text-black transition">
                                Buy Ticket
                              </button>
                            </div>
                          </div>
                          <p className="mt-3 sm:mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl font-semibold line-clamp-2">
                            {movie.title}
                          </p>
                          <p className="font-mulish text-lg font-bold text-primary">
                            {format(movie.release_date, "MMMM yyyy")}
                          </p>
                          <div className="flex flex-wrap gap-1 my-1">
                            {movie.genre_ids.map((id, idx) => {
                              const newGenre = genres.find((x) => x.id == id);
                              if (newGenre.id == id) {
                                return (
                                  <p
                                    key={idx}
                                    className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl select-none text-justify"
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

          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <p className="text-lg text-primary">
              <Link
                to={"/Movies"}
                // className={
                //   location.pathname === "/Movies" ? "text-gray-600" : ""
                // }
              >
                View All
              </Link>
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
          <div className="flex flex-col justify-between mt-20 mb-10 gap-5">
            <div className="flex justify-between">
              <div className="flex flex-col px-20">
                <p className="font-mulish text-lg text-primary font-bold text-left">
                  UPCOMING MOVIES
                </p>
                <p className="font-mulish text-[32px] text-left">
                  Exciting Movie Coming Soon
                </p>
              </div>
              <div className="flex flex-row px-20 gap-2 justify-center items-end">
                <div
                  className="flex justify-center items-center bg-secondary rounded-full h-15 w-15 rotate-180 hover:bg-gray-500 cursor-pointer"
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
                  className="flex justify-center items-center bg-primary rounded-full h-15 w-15 hover:bg-blue-900 cursor-pointer"
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
            {/* {moviesState.fetchStatus.upcoming.isLoading == true ? (
              <Loader />
            ) :  */}
            (
            <div className="grid grid-cols-4 mt-5 min-h-[405px] px-20 gap-4">
              {moviesState.upcoming
                .slice(previousFilm, nextFilm)
                .map((movie, idx) => {
                  return (
                    <div key={idx} className={"flex flex-col min-w-[264px]"}>
                      <div className="min-h-[405px]">
                        <img
                          className="h-full rounded-md select-none"
                          src={`${import.meta.env.VITE_BACKDROP_PATH}/${
                            movie.poster_path
                          }`}
                          alt="shield"
                        />
                      </div>
                      <p className="font-mulish text-2xl mt-3 font-bold">
                        {movie.title}
                      </p>
                      <p className="font-mulish text-lg font-bold text-primary">
                        {format(movie.release_date, "MMMM yyyy")}
                      </p>
                      <div className="flex flex-wrap gap-1 my-1">
                        {movie.genre_ids.map((id, idx) => {
                          const newGenre = genres.find((x) => x.id == id);
                          if (newGenre.id == id) {
                            return (
                              <p
                                key={idx}
                                className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl select-none text-justify"
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
            )
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
