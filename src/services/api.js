import axios from "axios";

export const get = async (url, headers) => {
  if (!headers) {
    headers = {
      "Content-type": "application/json",
    };
  }
  return axios.get(url).then((response) => response);
};
