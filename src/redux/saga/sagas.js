import { put, takeEvery, delay} from 'redux-saga/effects'
import {addMessage} from "../reducers/messageReducer";
import randomSentence from "random-sentence";


function* addMessageWithSaga(action) {
    try {
        yield put(addMessage(action.payload));
        if (action.payload.author !== 'chatbot') {
            yield delay(1000)
            yield put(addMessage({
                message: `hello, ${action.payload.author}! ${randomSentence({words:5})}`,
                author: 'chatbot',
                chatId: Number(action.payload.chatId)
            }));
        }
    } catch (e) {
        console.error(e.error)
    }
}

function* mySaga() {
    yield takeEvery("ADD_MESSAGE_WITH_SAGA", addMessageWithSaga);
}

export default mySaga;