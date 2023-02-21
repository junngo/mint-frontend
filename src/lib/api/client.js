import axios from 'axios';


let BASE_URL = 'http://localhost:8000';
if (process.env.NODE_ENV === "production") {
    BASE_URL = "https://api.mcocl.com";
}

const client = axios.create({
    baseURL: BASE_URL
});

export default client;
