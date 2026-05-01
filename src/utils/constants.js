export const TMDB_API_KEY = "d919032689bc81eb4807e33b86ffaf7b";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const GEMINI_API_KEY = "AIzaSyAJOo5ZAEjdlIodb_jd5GpGYlVVcsn91mQ";

export const TMDB_ENDPOINTS = {
  nowPlaying: `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`,
  popular: `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
  topRated: `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`,
  upcoming: `${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}`,
};