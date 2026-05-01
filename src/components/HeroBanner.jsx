import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const HeroBanner = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  const heroMovie = movies ? movies[0] : null;

  if (!heroMovie) return null;

  return (
    <div className="relative h-screen">
      <img
        className="w-full h-full object-cover"
        src={
          "https://image.tmdb.org/t/p/original" + heroMovie.backdrop_path
        }
        alt={heroMovie.title}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      <div className="absolute bottom-40 left-12 text-white">
        <h1 className="text-5xl font-bold mb-4">{heroMovie.title}</h1>
        <p className="text-lg w-96 mb-6 text-gray-300">
          {heroMovie.overview}
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-300">
            ▶ Play
          </button>
          <button className="bg-gray-500 bg-opacity-70 text-white px-8 py-3 rounded font-bold text-lg hover:bg-opacity-50">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;