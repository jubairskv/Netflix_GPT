<<<<<<< HEAD
<<<<<<< HEAD
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
=======
=======
>>>>>>> origin/main
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from "../Utils/movieSlice"
import{ useEffect } from 'react'
>>>>>>> e9f1b6994b25304dcfc715833fb898c538f4ec5e

const useNowPlayingMovies = () => {
  //fetch data from TMDB api to update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results)
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
   // if (!nowPlayingMovies) getNowPlayingMovies();
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
