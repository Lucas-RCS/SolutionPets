import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import credentials from "../utils/credentials";

/**
 * Function that intercepts errors (401), and returns a promise with the error message
 * @type {Function} errorInterceptor
 */
const errorInterceptor = (error) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Network Error."));
  }

  if (error.response?.status === 401) {
    // Do something
  }

  return Promise.reject(error);
};

/**
 * Function that intercepts responses, and returns a promise with the response
 * @type {Function} responseInterceptor
 */
const responseInterceptor = (response) => {
  return response;
};

/**
 * Class that creates a connection with the API
 * @class Connection
 */
class Connection {
  api;

  constructor() {
    this.api = axios.create({
      baseURL: credentials.url,
    });
  }

  /**
   * Function that returns a promise with the response of the API
   *  @public useApiResult
   *  @returns {Promise<[any, number]>} Promise with the response of the API
   */
  useApiResult(request, settings) {
    var api = this.api;

    if (settings != null) {
      api = axios.create(settings);
    }
    api.interceptors.response.use(
      (response) => responseInterceptor(response),
      (error) => errorInterceptor(error)
    );

    return new Promise((resolve, reject) => {
      try {
        api(request)
          .then(async (res) => {
            resolve(res.data);
          })
          .catch((res) => {
            reject(res);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default new Connection();
