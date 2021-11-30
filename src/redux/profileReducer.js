export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

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
  newPostText: 'it-kamasutra',
}

export const profileReducer = (state = initialState, action) => {

  switch (action.type){
    case ADD_POST: 
      let newPost = {
        id: Date.now(),
        message: state.newPostText,
        likesCount: 0,
      };

      return {...state, posts: [newPost, ...state.posts], newPostText: ''};
    case UPDATE_NEW_POST_TEXT: 
      return {...state, newPostText: action.newText};
    default: return state
  }
}

export default profileReducer;


export const addPost = () => ({
  type: ADD_POST
})
export const updateNewPostText= (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})