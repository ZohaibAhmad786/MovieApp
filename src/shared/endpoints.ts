export const BASE_URL = 'https://api.themoviedb.org/3' as string;

enum ENDPOINT {
  UPCOMMING_MOVIES = 'UPCOMMING_MOVIES',
  SEARCH_MOVIE = 'SEARCH_MOVIE',
  MOVIE_DETAILS = 'MOVIE_DETAILS',
}

export const ENDPOINTS: Record<ENDPOINT, string> = {
  [ENDPOINT.UPCOMMING_MOVIES]: '/movie/upcoming',
  [ENDPOINT.SEARCH_MOVIE]: '/search/movie',
  [ENDPOINT.MOVIE_DETAILS]: '/movie',
};


