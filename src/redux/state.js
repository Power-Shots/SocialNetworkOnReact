const store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      messages: [
        {
          id: 1,
          text: "Hi",
        },
        {
          id: 2,
          text: "How are you?",
        },
        {
          id: 3,
          text: "Good bye",
        },
      ],
      dialogs: [
        {
          id: 1,
          name: "Vasya",
        },
        {
          id: 2,
          name: "Elena",
        },
        {
          id: 3,
          name: "Vadim",
        },
      ],
    }, 
  },

  _callSubscriber(state) {
    console.log('state changed')
  },

  getState(){
    return this._state
  },
  
  

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if(action.type === "ADD_POST") {
      let newPost = {
        id: Date.now(),
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
    
      this._state.profilePage.posts = [newPost, ...this._state.profilePage.posts];
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } 
    else if(action.type === "UPDATE_NEW_POST_TEXT"){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}


export default store;
window.store = store;