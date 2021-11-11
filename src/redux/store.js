import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


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
    sidebar: {

    } 
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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar);
    this._callSubscriber(this._state);
  }
}






export default store;
window.store = store;