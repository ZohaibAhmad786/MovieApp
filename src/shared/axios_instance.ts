/*  eslint-disable */

import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse
} from 'axios';
import { BASE_URL } from './endpoints';


const controller = new AbortController();

const CancelToken = axios.CancelToken;

const source = CancelToken.source();
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = null//store.getState().entities.user.accessToken;

    config.headers = {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    };
    config.params = config.params || {};
    config.cancelToken = source.token || {};
    config.signal = controller.signal;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  // eslint-disable-next-line promise/prefer-await-to-callbacks
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function subscribeTokenRefresh(subscriber: (token: string) => void) {
  refreshSubscribers.push(subscriber);
}

function onTokenRefreshed(token: string) {
  refreshSubscribers.map((subscriber) => subscriber(token));
}

function resetTokenRefreshSubscribers() {
  refreshSubscribers = [];
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
