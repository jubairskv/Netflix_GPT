import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constant";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  //Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act ass a Movie recommendations system amd suggest some movie ofr the query : " +
      searchText.current.value +
      "only give names of 5 movies , comma separated like the example result given ahead .Example results: Gadar, Don, sholay, golmaal,koi mil gaya";

    //make an APi call to OpenAI and get movie results
    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!GptResults.choices) {
      //handle error
    }

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    console.log(GptResults.choices[0]?.message.content);

    // [Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan]
    const gptMovies = GptResults.choices[0]?.message.content.split(",");

    //For each movie i will search  TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); //it take some time in async function
    //[promise, promise, promise, promise ,promise]

    const tmdbResults = await Promise.all(promiseArray); //when all promiseArray data is resolved then only i get the data from tmdbResults
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieName: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className=" pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" m-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
