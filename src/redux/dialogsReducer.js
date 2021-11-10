export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state, action) => {

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


export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
})


export default dialogsReducer;