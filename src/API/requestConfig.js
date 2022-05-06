import axios from 'axios';
import { responseLogger } from "axios-logger";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});


export default api;
