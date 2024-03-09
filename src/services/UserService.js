import axios from "./customize-axios";

const fetchallUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export { fetchallUser };
