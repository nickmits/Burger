import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-7655b.firebaseio.com/'
});

export default instance;