import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpCommingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  //fetch data from TMDB api to update store
  const dispatch = useDispatch();
  const upCommingMovies = useSelector((store) => store.movies.upCommingMovies);
  const getUpCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results)
    dispatch(addUpCommingMovies(json.results));
  };
  useEffect(() => {
    !upCommingMovies && getUpCommingMovies();
  }, []);
};

export default useTopRatedMovies;
