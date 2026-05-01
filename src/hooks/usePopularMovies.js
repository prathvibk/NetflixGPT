import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";
import { TMDB_ENDPOINTS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  useEffect(() => {
    if (!popularMovies) {
      fetchMovies();
    }
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(TMDB_ENDPOINTS.popular);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
};

export default usePopularMovies;