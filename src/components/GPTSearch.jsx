import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGPTMovieResult } from "../store/gptSlice";
import { GEMINI_API_KEY, TMDB_API_KEY, IMG_CDN_URL } from "../utils/constants";

const GPTSearch = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const gptMovies = useSelector((state) => state.gpt.gptMovies);
  const searchedMovieNames = useSelector(
    (state) => state.gpt.searchedMovieNames
  );

  const searchMovieInTMDB = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${movieName}`
    );
    const data = await response.json();
    return data.results;
  };

  const handleGPTSearch = async () => {
    const query = searchText.current.value;
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Act as a movie recommendation system. Search for "${query}" and suggest exactly 5 movies. Return ONLY a comma separated list of movie names. Example: Movie1, Movie2, Movie3, Movie4, Movie5`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("Full response:", data);

      const text = data.candidates[0].content.parts[0].text;
      console.log("Movie names text:", text);

      const movieNames = text
        .split(",")
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

      const movieResults = await Promise.all(
        movieNames.map((name) => searchMovieInTMDB(name))
      );

      dispatch(
        addGPTMovieResult({
          movieNames,
          movieResults,
        })
      );
    } catch (error) {
      console.log("Gemini Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex justify-center pt-20 pb-10">
        <div className="flex gap-4 w-full max-w-2xl px-4">
          <input
            ref={searchText}
            type="text"
            placeholder="What do you want to watch? Ask AI..."
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white text-lg border border-gray-600 focus:outline-none focus:border-red-600"
          />
          <button
            onClick={handleGPTSearch}
            className="bg-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center mt-10">
          <p className="text-gray-400 text-xl">
            🤖 AI is finding movies for you...
          </p>
        </div>
      )}

      {gptMovies &&
        searchedMovieNames &&
        searchedMovieNames.map((movieName, index) => (
          <div key={movieName} className="px-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">{movieName}</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {gptMovies[index] &&
                gptMovies[index].slice(0, 5).map((movie) => (
                  <div key={movie.id} className="flex-shrink-0 w-40">
                    {movie.poster_path && (
                      <img
                        className="w-full rounded-lg hover:scale-110 transition-transform duration-300"
                        src={IMG_CDN_URL + movie.poster_path}
                        alt={movie.title}
                      />
                    )}
                    <p className="text-sm mt-2 text-center">{movie.title}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GPTSearch;