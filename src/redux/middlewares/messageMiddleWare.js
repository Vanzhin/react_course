import {addMessage} from "../reducers/messageReducer";

export const addMessageWithThunk = (message, author, chatId) => (dispatch, getState) => {
    dispatch(addMessage({message: message, author: author, chatId: Number(chatId)}));
    if (author !== 'chatbot') {
        setTimeout(() => dispatch(addMessage({
            message: "hello, " + author,
            author: 'chatbot',
            chatId: Number(chatId)
        })), 1000);

    }

}