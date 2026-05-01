import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { IMG_CDN_URL } from "../utils/constants";
import HeroBanner from "./HeroBanner";
import { toggleGPTSearchView } from "../store/gptSlice";
import GPTSearch from "./GPTSearch";

const MovieRow = ({ title, movies }) => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="flex gap-4 overflow-x-auto pb-4">
      {movies &&
        movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-40">
            <img
              className="w-full rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
              src={IMG_CDN_URL + movie.poster_path}
              alt={movie.title}
            />
            <p className="text-sm mt-2 text-center">{movie.title}</p>
          </div>
        ))}
    </div>
  </div>
);

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-8">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleGPTSearch}
            className="bg-purple-600 px-6 py-2 rounded font-bold hover:bg-purple-700"
          >
            {showGPTSearch ? "Home" : "GPT Search 🤖"}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-6 py-2 rounded font-bold hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Content */}
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <HeroBanner />
          <MovieRow title="Now Playing" movies={nowPlayingMovies} />
          <MovieRow title="Popular" movies={popularMovies} />
          <MovieRow title="Top Rated" movies={topRatedMovies} />
        </>
      )}
    </div>
  );
};

export default Browse;