import {addMessage} from "../reducers/messageReducer";
import randomSentence from "random-sentence"

export const addMessageWithThunk = (message, author, chatId) => (dispatch, getState) => {
    dispatch(addMessage({message: message, author: author, chatId: Number(chatId)}));
    if (author !== 'chatbot') {
        setTimeout(() => dispatch(addMessage({
            message: `hello, ${author}! ${randomSentence({words:5})}`,
            author: 'chatbot',
            chatId: Number(chatId)
        })), 1000);

    }

}