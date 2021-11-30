export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

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
  newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {...state, newMessageBody: action.body};
    case SEND_MESSAGE: 
      let newMessage = {
        id: Date.now(),
        message: state.newMessageBody
      }

      return {...state, messages: [...state.messages, newMessage], newMessageBody: ''};
    default: return state
  }
}


export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export const sendMessage = () => ({
  type: SEND_MESSAGE,
})


export default dialogsReducer;