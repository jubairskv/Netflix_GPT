<<<<<<< HEAD
import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";
=======
import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'
<<<<<<< HEAD
>>>>>>> e9f1b6994b25304dcfc715833fb898c538f4ec5e
=======
>>>>>>> origin/main

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
