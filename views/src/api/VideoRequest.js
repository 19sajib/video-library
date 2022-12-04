import axios from 'axios'

const API = axios.create({baseURL: "https://video-library-jade.vercel.app/api/v1"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });


export const addVideo = videoData => API.post(`/video/add`, videoData);
export const getVideo = id => API.get(`/video/${id}`)
export const getAllVideo = () => API.get(`/video/all`)
export const addView = id => API.put(`/video/view/${id}`)
export const addLike = id => API.put(`/video/like/${id}`)
export const addDislike = id => API.put(`/video/dislike/${id}`)
export const allInteraction = id => API.get(`/video/interact/${id}`)
