<<<<<<< HEAD
<<<<<<< HEAD
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //fetch data from TMDB api to update store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results)
    dispatch(addPopularMovies(json.results));
  };
=======
=======
>>>>>>> origin/main
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Utils/movieSlice';
import{ useEffect } from 'react'

const usePopularMovies = () => {
    //fetch data from TMDB api to update store
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(json.results)
        dispatch(addPopularMovies(json.results));
    };
>>>>>>> e9f1b6994b25304dcfc715833fb898c538f4ec5e

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;