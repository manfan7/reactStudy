import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "9c5bde76-ab52-491f-be9c-1f90123bdbbb",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((Response) => Response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);

    /* .then((response) => response.data); */
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
};
