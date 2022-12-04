import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:9090/api/v1"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });


export const getUserInfo = id => API.get(`/user/info/${id}`)

