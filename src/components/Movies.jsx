import React from "react";
import Movie1 from "../assets/movie1.png";

function Movies({ movies }) {
  // const [isShow, setIsShow] = useState(false);
  // const [arrGenre, setArrGenre] = useState([]);
  // const [isShow3, setIsShow3] = useState(false);
  // const [isShow4, setIsShow4] = useState(false);

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

  return (
    <>
      {movies.map((movie, idx) => {
        return (
          <div
            key={idx}
            className={"flex flex-col w-full"}
            // onPointerEnter={() => setIsShow(true)}
            // onPointerLeave={() => setIsShow(false)}
          >
            <div className="min-h-[405px] min-w-[264px]">
              <img
                className="h-[405px] rounded-md select-none"
                src={`${import.meta.env.VITE_BACKDROP_PATH}/${
                  movie.item.backdrop_path
                }`}
                alt={movie.item.title}
              />
            </div>

            <p className="font-mulish text-shadow-md mt-3 font-bold select-none">
              {movie.item.title}
            </p>

            <div className="flex flex-wrap gap-1 my-1">
              {movie.item.genre_ids.map((id, idx) => {
                const newGenre = genres.find((x) => x.id == id);
                if (newGenre.id == id) {
                  return (
                    <p
                      key={idx}
                      className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl select-none"
                    >
                      {newGenre.name}
                    </p>
                  );
                }
              })}
            </div>
          </div>
          // <div key={idx} className="w-full relative snap-start">
          //   <div className="relative group">
          //     <img
          //       src={`${import.meta.env.VITE_BACKDROP_PATH}/${
          //         movie.item.poster_path
          //       }`}
          //       alt={"gambar"}
          //       className="w-full min-h-80 sm:h-96 md:h-100 lg:h-110 rounded-xl object-cover"
          //     />
          //     <div className="absolute inset-0 bg-black/65 bg-opacity-70 rounded-xl flex flex-col justify-center items-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          //       <button className="text-white border-2 border-solid border-white px-12 sm:px-16 md:px-20 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-[#1a45b8] hover:border-[#1a45b8] transition">
          //         Details
          //       </button>
          //       <button className="bg-[#1a45b8] text-white px-10 sm:px-14 md:px-17 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 hover:text-black transition">
          //         Buy Ticket
          //       </button>
          //     </div>
          //   </div>
          //   <p className="mt-3 sm:mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl font-semibold line-clamp-2">
          //     {movie.item.title}
          //   </p>
          //   {/* <p className="font-mulish text-lg font-bold text-primary">
          //     {format(movie.item.release_date, "MMMM yyyy")}
          //   </p> */}
          //   <div className="flex flex-wrap gap-1 my-1">
          //     {movie.genre_ids.map((id, idx) => {
          //       const newGenre = genres.find((x) => x.id == id);
          //       if (newGenre.id == id) {
          //         return (
          //           <p
          //             key={idx}
          //             className="bg-smoke text-secondary px-2 text-[16px] rounded-2xl select-none text-justify"
          //           >
          //             {newGenre.name}
          //           </p>
          //         );
          //       }
          //     })}
          //   </div>
          // </div>
        );
      })}
    </>
  );
}

export default Movies;
