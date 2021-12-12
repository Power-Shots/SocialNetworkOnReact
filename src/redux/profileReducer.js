import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  newPostText: "it-kamasutra",
  profile: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Date.now(),
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [newPost, ...state.posts], newPostText: "" };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default profileReducer;



export const addPost = () => ({
  type: ADD_POST,
});

export const updateNewPostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
        .then(data =>  {
          dispatch(setUserProfile(data))
        })
}
