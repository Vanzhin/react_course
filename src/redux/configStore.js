import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer";
import {messageReducer} from "./reducers/messageReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = { key: 'root', storage,
};
const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store)