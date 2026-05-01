import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";
import { TMDB_ENDPOINTS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  useEffect(() => {
    if (!topRatedMovies) {
      fetchMovies();
    }
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(TMDB_ENDPOINTS.topRated);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
};

export default useTopRatedMovies;