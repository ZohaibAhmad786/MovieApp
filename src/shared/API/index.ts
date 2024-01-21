import axiosInstance from '../axios_instance';
import {ENDPOINTS} from '../endpoints';

export const getUpCommingMovies = async () => {
  const params = {
    api_key: '22d22d403c9d2bc75d6eca691181e097',
  };
  const repsonse = await axiosInstance.get(ENDPOINTS.UPCOMMING_MOVIES, {
    params,
  });
  return repsonse.data;
};

export const getMovieDetails = async (movieId: number) => {
  const params = {
    api_key: '22d22d403c9d2bc75d6eca691181e097',
  };
  const repsonse = await axiosInstance.get(
    ENDPOINTS.MOVIE_DETAILS + '/' + movieId,
    {
      params,
    },
  );
  return repsonse.data;
};
export const getMovieTrailer = async (movieId: number) => {
  const params = {
    api_key: '22d22d403c9d2bc75d6eca691181e097',
  };
  const repsonse = await axiosInstance.get(
    ENDPOINTS.MOVIE_DETAILS +'/'+ movieId + '/videos',
    {
      params,
    },
  );
  return repsonse.data;
};
export const getSearchMovies = async (query: string) => {
  let params: any = {
    api_key: '22d22d403c9d2bc75d6eca691181e097',
  };
  if (query) {
    params.query = query;
  }
  let url = query ? ENDPOINTS.SEARCH_MOVIE : ENDPOINTS.UPCOMMING_MOVIES;
  const repsonse = await axiosInstance.get(url, {
    params,
  });
  return repsonse.data;
};
