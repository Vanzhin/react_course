import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer";
import {messageReducer} from "./reducers/messageReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./saga/sagas"
const persistConfig = { key: 'root', storage,
};
const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
});
const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(mySaga);

