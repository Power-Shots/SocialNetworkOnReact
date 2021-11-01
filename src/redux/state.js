

const state = {
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

export default state