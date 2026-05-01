import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { TMDB_ENDPOINTS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  useEffect(() => {
    if (!nowPlayingMovies) {
      fetchMovies();
    }
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(TMDB_ENDPOINTS.nowPlaying);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
};

export default useNowPlayingMovies;