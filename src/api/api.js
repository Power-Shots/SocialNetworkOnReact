import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "API-KEY": "b9fb0702-2656-4896-ae52-dd305305c241",
  }  
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 25) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data.resultCode)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data.resultCode)
  },
  getProfile(userId) {
    console.warn('Obsolete method. Used profile.api object')
    return  profileAPI.getProfile(userId)
  }  
}


export const profileAPI = {
  getProfile(userId) {
    return  instance.get(`profile/${userId}`)
        .then(response =>  response.data)
  },
  
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
    .then(response =>  response.data)
  },

  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status})
    .then(response =>  response.data)
  }
}


export const authAPI = {
  me(){
    return instance.get(`auth/me`).then(response => response.data)
  }
}

