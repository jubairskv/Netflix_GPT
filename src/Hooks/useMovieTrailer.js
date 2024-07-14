import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTailerVideo } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerMovies = useSelector((store) => store.movies.trailerVideo);
  //fetch trailer video && updating the store withe trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json)

    const filter_data = json.results.filter(
      (video) => video.type === "Trailer"
    );
    //console.log(filter_data)

    const trailer = filter_data.length ? filter_data[0] : json.results[0];
    //console.log(trailer)
    dispatch(addTailerVideo(trailer));
  };

  useEffect(() => {
    !trailerMovies && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
