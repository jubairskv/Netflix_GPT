<<<<<<< HEAD
<<<<<<< HEAD
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  //fetch data from TMDB api to update store
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results)
    dispatch(addTopRatedMovies(json.results));
  };
=======
=======
>>>>>>> origin/main
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Utils/movieSlice';
import{ useEffect } from 'react'

const useTopRatedMovies = () => {
    //fetch data from TMDB api to update store
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?page=1',
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(json.results)
        dispatch(addTopRatedMovies(json.results));
    };
>>>>>>> e9f1b6994b25304dcfc715833fb898c538f4ec5e

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
