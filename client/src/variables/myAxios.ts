import axios from "axios";

// global configure for Axios
const myAxios = axios.create({
    baseURL: 'http://localhost:5000'
})

export default myAxios;