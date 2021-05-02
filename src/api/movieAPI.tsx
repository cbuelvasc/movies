import axios from 'axios';

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ef1c92c8c6780aed1beca3a966892280',
        language: 'es-ES',
    },
});

export default movieAPI;
