let rerenderEntireTree = (state) => console.log('state changed')

let state = {
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
};

window.state = state

export const addPost = () => {
  let newPost = {
    id: Date.now(),
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts = [newPost, ...state.profilePage.posts];
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}


export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state