import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:9090"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const getAllVideo = () => API.get(`/video/all`)
export const addView = id => API.put(`/video/view/${id}`)
