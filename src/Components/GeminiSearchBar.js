import { useRef } from "react";
import genAI from "../Utils/geminiai";

const GeminiSearchBar = () => {
    const searchText = useRef(null);

    const handleSearchClick = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" })

        const prompt =
            "Act as a Movie/series Recommendation system and suggest some movies and series for the query " +
            searchText.current.value +
            ". Only give me names of upto top 10 movies or series, comman seperated like example result given ahead. Example Result: Sholay, Don, Gadar, Welcome, Golmaal 2, Koi mil gaya, Kite, Veer, Chennai express, Ek tha tiger";

        const geminiResult = await model.generateContent(prompt)

        const response = geminiResult.response;
        const text = response.text();
        console.log("gemini result", text);
    }

        return (
            <div className="pt-[10%] flex justify-center">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-3/4 md:w-1/2 mx-auto bg-black grid grid-cols-12"
                >
                    <input
                        ref={searchText}
                        type="text"
                        className="p-4 m-4 col-span-8"
                        placeholder="What are you planing to watch today?"
                    />
                    <button
                        onClick={handleSearchClick}
                        className="col-span-4 m-4 py-2 px-4 bg-red-600 text-white rounded-md"
                    >
                        Search
                    </button>
                </form>
            </div>
        )
    }

    export default GeminiSearchBar