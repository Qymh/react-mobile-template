import axios, { AxiosRequestConfig, Method } from 'axios';

export const ax = axios.create({
  baseURL: '/'
});

ax.interceptors.request.use(req => {
  return req;
});

ax.interceptors.response.use(res => {
  return res;
});

export function send(url: string, method: Method, data: any) {
  const options: AxiosRequestConfig = {
    url,
    method
  };
  if (method === 'get') {
    options.params = data;
  } else {
    options.data = data;
  }
  return axios(options)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw err;
    });
}

export default {
  get(url: string, data?: any) {
    return send(url, 'get', data);
  },
  post(url: string, data?: any) {
    return send(url, 'post', data);
  },
  put(url: string, data?: any) {
    return send(url, 'put', data);
  },
  delete(url: string, data?: any) {
    return send(url, 'delete', data);
  }
};
