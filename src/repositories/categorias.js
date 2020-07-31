/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllCategoriesWithVideos() {
  console.log(config.URL_BACKEND);
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados');
    });

}

function getAll() {
  console.log(config.URL_BACKEND);
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados');
    });

}

export default {
  getAllCategoriesWithVideos,
  getAll,
}