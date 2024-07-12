<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/main
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addUpCommingMovies } from '../Utils/movieSlice';
import{ useEffect } from 'react'

const useTopRatedMovies = () => {
    //fetch data from TMDB api to update store
    const dispatch = useDispatch();
    const getUpCommingMovies = async () => {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?page=1',
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(json.results)
        dispatch(addUpCommingMovies(json.results));
    };
>>>>>>> e9f1b6994b25304dcfc715833fb898c538f4ec5e

  useEffect(() => {
    !upCommingMovies && getUpCommingMovies();
  }, []);
};

export default useTopRatedMovies;
