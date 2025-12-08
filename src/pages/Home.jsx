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

function Home() {
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [isShow4, setIsShow4] = useState(false);

  const [nextFilm, setNextFilm] = useState(4);
  const [previousFilm, setPreviousFilm] = useState(0);
  const [movies, setMovies] = useState([]);
  const [maxMovie, setMaxMovie] = useState(0);

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

  async function GetFilm(start, end) {
    try {
      const url = `${import.meta.env.VITE_MOVIE_UPCOMING}?api_key=${
        import.meta.env.VITE_MOVIE_KEY
      }`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`${response.status}:${response.statusText}`);

      const data = await response.json();

      setMaxMovie(data.results.length);

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
  }, [nextFilm, previousFilm]);

  function next() {
    if (nextFilm < maxMovie) {
      setNextFilm(nextFilm + 4);
      setPreviousFilm(previousFilm + 4);
    }
  }

  function previous() {
    if (previousFilm > 0) {
      setNextFilm(nextFilm - 4);
      setPreviousFilm(previousFilm - 4);
    }
  }

  return (
    <div>
      <Header />
      <main className="mt-30">
        <section>
          <div className="flex justify-between mt-10 mb-10 gap-10">
            <div className="flex justify-center flex-col pl-20 w-3/4 gap-5">
              <p className="font-mulish text-primary font-bold">
                MOVIE TICKET PURCHASES #1 IN INDONESIA
              </p>
              <p className="font-mulish text-5xl">
                Experience the Magic of Cinema: Book Your Tickets Today
              </p>
              <p className="text-secondary">
                Sign up and get the ticket with a lot of discount
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows pr-20 gap-2">
              <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-r-md rounded-l-md h-full">
                <img src={Hero1} />
              </div>
              <div className="col-start-1 col-end-2 row-start-2 row-end-4">
                <img src={Hero2} />
              </div>
              <div className="col-start-2 col-end-3 row-start-1 row-end-3">
                <img src={Hero3} />
              </div>
              <div className="col-start-2 col-end-3 row-start-3 row-end-4">
                <img src={Hero4} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between mt-20 mb-10 gap-20">
            <div className="flex flex-col px-20">
              <p className="font-mulish text-lg text-primary font-bold">
                WHY CHOOSE US
              </p>
              <p className="font-mulish text-[32px]">
                Unleashing the Ultimate Movie
              </p>
              <p className="m-0 font-mulish text-[32px]">Experience</p>
              <div className="flex gap-10 mt-5">
                <div className="flex flex-col">
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
                  <p className="text-secondary text-[16px] text-justify">
                    We guaranteed your pleasure if you order your tickets at us
                    and we also provide you a guarantee if theres a hindrance in
                    your purchasing and we will give back your payment before
                    1day
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-center items-center bg-secondary rounded-full h-15 w-15">
                    <img src={Cs2} alt="check" height={"25vh"} width={"25vw"} />
                  </div>
                  <p className="text-lg font-mulish text-gray-900 font-medium mt-5 text-justify">
                    Affordable
                  </p>
                  <p className="text-secondary text-[16px] text-justify">
                    We give you our best price if you compare to another
                    ticketing application, Be Flexible with Dates: Search for
                    your favorite movies using "Tickitz"
                  </p>
                </div>
                <div className="flex flex-col">
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
                  <p className="text-secondary text-[16px] text-justify">
                    If you have problem, we ready for you to handle your's
                    inconvenient, just contact our customer service and we will
                    give you our best service
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-20 mb-10 gap-5">
            <div className="flex flex-col px-20">
              <p className="font-mulish text-lg text-primary font-bold text-center">
                MOVIES
              </p>
              <p className="font-mulish text-[32px] text-center">
                Exciting Movie That Should Be
              </p>
              <p className="m-0 font-mulish text-[32px] text-center">
                Watched Today
              </p>
              <div className="flex gap-10 mt-5 min-h-80">
                <div className="flex flex-col relative">
                  <div
                    className={"w-full h-full"}
                    onPointerEnter={() => setIsShow(true)}
                    onPointerLeave={() => setIsShow(false)}
                  >
                    <img className="" src={Movie1} alt="shield" />
                    {isShow && (
                      <div
                        className={
                          "absolute flex flex-col gap-2 justify-center items-center top-1/3 right-1/3"
                        }
                      >
                        <button className=" bg-transparent border border-solid text-white border-white p-1 rounded-md w-full">
                          Details
                        </button>
                        <button className=" bg-primary border-2 border-solid border-primary text-white p-1 rounded-md">
                          Buy Ticket
                        </button>
                      </div>
                    )}
                    <p className="font-mulish text-2xl mt-3 font-bold">
                      Black Widow
                    </p>
                    <div className="flex justify-start gap-2.5 pt-3">
                      <p className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl">
                        Action
                      </p>
                      <p className="bg-smoke text-secondary px-2 rounded-2xl">
                        Adventure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <div
                    className={"w-full h-full"}
                    onPointerEnter={() => setIsShow2(true)}
                    onPointerLeave={() => setIsShow2(false)}
                  >
                    <img className="" src={Movie2} alt="shield" />
                    {isShow2 && (
                      <div
                        className={
                          "absolute flex flex-col gap-2  justify-center items-center top-1/3 right-1/3"
                        }
                      >
                        <button className=" bg-transparent border border-solid text-white border-white p-1 rounded-md w-full">
                          Details
                        </button>
                        <button className=" bg-primary border-2 border-solid border-primary text-white p-1 rounded-md">
                          Buy Ticket
                        </button>
                      </div>
                    )}
                    <p className="font-mulish text-2xl mt-3 font-bold">
                      The Witches
                    </p>
                    <div className="flex justify-start gap-2.5 pt-3">
                      <p className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl">
                        Comedy
                      </p>
                      <p className="bg-smoke text-secondary px-2 rounded-2xl">
                        Adventure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <div
                    className={"w-full h-full"}
                    onPointerEnter={() => setIsShow3(true)}
                    onPointerLeave={() => setIsShow3(false)}
                  >
                    <img className="" src={Movie3} alt="shield" />
                    {isShow3 && (
                      <div
                        className={
                          "flex flex-col gap-2 absolute justify-center items-center top-1/3 right-1/3"
                        }
                      >
                        <button className=" bg-transparent border border-solid text-white border-white p-1 rounded-md w-full">
                          Details
                        </button>
                        <button className=" bg-primary border-2 border-solid border-primary text-white p-1 rounded-md">
                          Buy Ticket
                        </button>
                      </div>
                    )}
                    <p className="font-mulish text-2xl mt-3 font-bold">Tenet</p>
                    <div className="flex justify-start gap-2.5 pt-3">
                      <p className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl">
                        Action
                      </p>
                      <p className="bg-smoke text-secondary px-2 rounded-2xl">
                        Sci-Fi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <div
                    className={"w-full h-full"}
                    onPointerEnter={() => setIsShow4(true)}
                    onPointerLeave={() => setIsShow4(false)}
                  >
                    <img className="" src={Movie4} alt="shield" />
                    {isShow4 && (
                      <div
                        className={
                          "flex flex-col gap-2 absolute justify-center items-center top-1/3 right-1/3"
                        }
                      >
                        <button className=" bg-transparent border border-solid text-white border-white p-1 rounded-md w-full">
                          Details
                        </button>
                        <button className=" bg-primary border-2 border-solid border-primary text-white p-1 rounded-md">
                          Buy Ticket
                        </button>
                      </div>
                    )}
                    <p className="font-mulish text-2xl mt-3 font-bold">
                      Spiderman
                    </p>
                    <div className="flex justify-start gap-2.5 pt-3">
                      <p className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl">
                        Action
                      </p>
                      <p className="bg-smoke text-secondary px-2 rounded-2xl">
                        Adventure
                      </p>
                    </div>
                  </div>
                </div>
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

            <div className="grid grid-cols-4 mt-5 min-h-[405px] px-20 gap-4">
              {movies.map((movie, idx) => {
                return (
                  <div key={idx} className={"flex flex-col min-w-[264px]"}>
                    <div className="min-h-[405px]">
                      <img
                        className="h-full rounded-md select-none"
                        src={`${import.meta.env.VITE_BACKDROP_PATH}/${
                          movie.item.backdrop_path
                        }`}
                        alt="shield"
                      />
                    </div>
                    <p className="font-mulish text-2xl mt-3 font-bold">
                      {movie.item.title}
                    </p>
                    <p className="font-mulish text-lg font-bold text-primary">
                      {format(movie.item.release_date, "MMMM yyyy")}
                    </p>
                    <div className="flex flex-wrap gap-1 my-1">
                      {movie.item.genre_ids.map((id, idx) => {
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
          </div>
        </section>

        <section>
          <Subscribe />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
