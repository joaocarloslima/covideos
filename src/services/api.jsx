import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export function api_options() {
  return {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: process.env.REACT_APP_LANG,
    },
  };
}
