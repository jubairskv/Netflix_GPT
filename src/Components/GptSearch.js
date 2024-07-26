import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import GeminiSearchBar from "./GeminiSearchBar"
import { BG_URL } from "../Utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        {/* <GptSearchBar /> */}
        <GeminiSearchBar/>
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
