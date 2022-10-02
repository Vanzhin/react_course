import {combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer";
import {messageReducer} from "./reducers/messageReducer";

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})
export const store = createStore(reducer)