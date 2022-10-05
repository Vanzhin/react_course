import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer";
import {messageReducer} from "./reducers/messageReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

// const logger = (store) => (next) => (action) => {
//     console.log(store.getState(), action)
//     return next(action);
// };

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))