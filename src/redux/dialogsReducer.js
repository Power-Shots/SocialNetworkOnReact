const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case SEND_MESSAGE: 
      let newMessage = {
        id: Date.now(),
        message: action.newMessageBody
      }

      return {...state, messages: [...state.messages, newMessage]};
    default: return state
  }
}

export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody
})


export default dialogsReducer;