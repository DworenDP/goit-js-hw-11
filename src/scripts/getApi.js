const { default: axios } = require("axios");

const URL = "https://pixabay.com/api/";

const API_KEY = "?key=33273025-546ff08445fd4a61172a6ea0a";
const REQUEST_OPTIONS =
  "image_type=photo&orientation=horizontal&safesearch=true";

function getPicture(query) {
  return axios.get(`${URL}${API_KEY}&q=${query}&${REQUEST_OPTIONS}`);
}

export { getPicture };
