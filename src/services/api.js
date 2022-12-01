//https://api.themoviedb.org/3/movie/550?api_key=1eb32c5f2e69d800bc7a7a2a7a86fb35
import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api;