export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const profileReducer = (state, action) => {

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


export const addPostActionCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})