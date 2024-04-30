import axios from 'axios';

const DB_URI = 'http://localhost:3001/api';

const instance = axios.create({
    baseURL: DB_URI,
    withCredentials: true
});

export default instance;