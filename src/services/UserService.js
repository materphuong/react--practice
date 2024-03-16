import axios from "./customize-axios";

const fetchallUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name: name, job: job });
};

const putUpdateUser = (id, userData) => {
  return axios.put(`/api/users/${id}`, { userData });
};
const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};
export { fetchallUser, postCreateUser, putUpdateUser, deleteUser };
