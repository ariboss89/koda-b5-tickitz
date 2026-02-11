//import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
//import { format } from "date-fns";
import { useSelector } from "react-redux";
// import { movieActions } from "../redux/slices/movies.slice";
import Loader from "./Loader";
import ImgDefault from "../assets/logo.png";
import Hero4 from "../assets/img4.png";

function Movies() {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movies);
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const search = urlParams.get("search");
  // const page = urlParams.get("page");
  //const genre = urlParams.get("genre");

  // const [param, _] = useState({
  //   search: search,
  //   page: page,
  //   genre: genre,
  // });

  //console.log(search, page, "search param");

  // setParam.search(search);
  // setParam.page(page);
  //const aaa = moviesState.search;
  //console.log(aaa, "aaaa");

  // useEffect(() => {
  //   dispatch(movieActions.getMoviesBySearchThunk(param));
  //   dispatch(movieActions.getGenreMoviesThunk());
  // }, []);

  // useEffect(() => {
  //   dispatch(movieActions.getMoviesByGenreThunk(param.genre));
  // }, []);

  const handleMovieClick = (movieId) => {
    navigate(`${movieId}`);
  };

  const handlePurchasingClick = (movieId) => {
    navigate(`buyticket/${movieId}`);
  };

  return (
    <>
      {moviesState.fetchStatus.search.isLoading == true ? (
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
          <Loader />
        </div>
      ) : (
        moviesState.search.data &&
        moviesState.search.data[0].map((movie, idx) => {
          return (
            <div
              key={idx}
              className="relative min-w-3/5 snap-start sm:min-w-1/2 md:min-w-2/5 lg:min-w-1/4"
            >
              <div className="group relative">
                <img
                  src={
                    movie.poster_url == null
                      ? { Hero4 }
                      : `${import.meta.env.VITE_MOVIE_GO_BASE}${import.meta.env.VITE_BACKDROP_PATH_IMG}${
                          movie.poster_url
                        }`
                  }
                  alt={movie.title}
                  className="min-h-80 min-w-full rounded-xl object-cover sm:h-96 md:h-100 lg:h-110"
                />
                <div className="bg-opacity-70 absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-black/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMovieClick(movie.id);
                    }}
                    className="rounded-lg border-2 border-solid border-white px-12 py-2 text-sm font-semibold text-white transition hover:border-[#1a45b8] hover:bg-[#1a45b8] sm:px-16 sm:py-3 sm:text-base md:px-20"
                  >
                    Details
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePurchasingClick(movie.id);
                    }}
                    className="rounded-lg bg-[#1a45b8] px-10 py-2 text-sm font-semibold text-white transition hover:bg-gray-100 hover:text-black sm:px-14 sm:py-3 sm:text-base md:px-17"
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
              <p className="mt-3 line-clamp-2 text-lg font-semibold sm:mt-4 sm:text-xl md:mt-5 md:text-2xl">
                {movie.title}
              </p>
              <p className="font-mulish text-primary text-lg font-bold">
                {movie.release_date == ""
                  ? "No date inserted"
                  : // : format(movie.release_date, "MMMM yyyy")}
                    movie.release_date}
              </p>
              {/* <div className="my-1 flex flex-wrap gap-1">
                {moviesState.fetchStatus.genre.isLoading == true ? (
                  <Loader />
                ) : (
                  movie.genre_ids.map((id, idx) => {
                    const genres = moviesState.genre.genres;
                    const newGenre = genres.find((x) => x.id == id);
                    if (newGenre.id == id) {
                      return (
                        <p
                          key={idx}
                          className="bg-smoke text-secondary rounded-2xl px-2 text-justify text-[16px] select-none"
                        >
                          {newGenre.name}
                        </p>
                      );
                    }
                  })
                )}
              </div> */}
            </div>
          );
        })
      )}
      {moviesState}
    </>
  );
}

export default Movies;
