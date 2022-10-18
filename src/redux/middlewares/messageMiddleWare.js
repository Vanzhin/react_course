import {addMessage} from "../reducers/messageReducer";
import randomSentence from "random-sentence"

export const addMessageWithThunk = (message, author, chatId) => (dispatch, getState) => {
    dispatch(addMessage({message: message, author: author, chatId: Number(chatId), id:Date.now()}));
    if (author !== 'chatbot') {
        setTimeout(() => dispatch(addMessage({
            message: `hello, ${author}! ${randomSentence({words:5})}`,
            author: 'chatbot',
            id:Date.now(),
            chatId: Number(chatId)
        })), 1000);

    }

}