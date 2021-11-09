export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

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
          message: "Hi",
        },
        {
          id: 2,
          message: "How are you?",
        },
        {
          id: 3,
          message: "Good bye",
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
      newMessageBody: ''
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
    if(action.type === ADD_POST) {
      let newPost = {
        id: Date.now(),
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
    
      this._state.profilePage.posts = [newPost, ...this._state.profilePage.posts];
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } 
    else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if(action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
    else if(action.type === SEND_MESSAGE){
      let newMessage = {
        id: Date.now(),
        message: this._state.dialogsPage.newMessageBody,
      }

      this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage];
      this._state.dialogsPage.newMessageBody = '';
      this._callSubscriber(this._state);
    }
  }
}


export const addPostActionCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
})


export default store;
window.store = store;