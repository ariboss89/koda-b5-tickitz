import fetchUrl from "../utils/fetch";

const getMoviesNowPlayingData = async (url) => {
  //const obj = {};
  const data = await fetchUrl(url);
  const result = data.results.map((item) => {
    return {
      item,
    };
  });

  // Object.assign(obj, {
  //   id: result.id,
  //   title: result.title,
  //   img: result.poster_path,
  //   poster: result.backdrop_path,
  //   date: result.release_date,
  // });

  return result;
};

export default getMoviesNowPlayingData();
