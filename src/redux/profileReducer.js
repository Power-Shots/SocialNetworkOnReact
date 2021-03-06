import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS"

const initialState = {
  posts: [
    {
      id: 1,
      message: `Hi, how are you?`,
      likesCount: 42,
    },
    {
      id: 2,
      message: `It's my first post`,
      likesCount: 12,
    },
  ],
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Date.now(),
        message: action.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [newPost, ...state.posts] };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS: 
      return { ...state, status: action.status}
    default:
      return state;
  }
};

export default profileReducer;



export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});



export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
        .then(data =>  {
          dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
        .then(data =>  {
          dispatch(setStatus(data))
        })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
        .then(data =>  {
          if(data.resultCode === 0){
            dispatch(setStatus(status))
          }
          
        })
}
