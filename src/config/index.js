/* eslint-disable linebreak-style */
const includesLocalhost = window.location.hostname.includes('localhost');
const URL_BACKEND = includesLocalhost ? 'http://localhost:8080' : 'https://gabsflix.herokuapp.com';

export default {
  URL_BACKEND,
};