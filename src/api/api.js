import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instanceUsers = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "API-KEY": "b9fb0702-2656-4896-ae52-dd305305c241",
  }  
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 25) {
    return instanceUsers.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
}

export const followAPI = {
  followUser(userId) {
    return instanceUsers.post(`follow/${userId}`, {}).then(response => response.data.resultCode)
  },
  unfollowUser(userId) {
    return instanceUsers.delete(`follow/${userId}`, {}).then(response => response.data.resultCode)
  }
}

