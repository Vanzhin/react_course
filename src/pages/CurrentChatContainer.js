import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Typography} from "@mui/material";
import NoChat from "../components/NoChat";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getChat} from "../store/chats/selectors";
import {getMessagesByChat} from "../store/messages/selectors";
import {addMessageWithThunk} from "../redux/middlewares/messageMiddleWare";
import CurrentChat from "./CurrentChat";
import firebase from "firebase/compat/app";
import {db} from "../services/firebase";
import {addMessageInitiate} from "../redux/reducers/firebaseMessageReducer";
import {addMessage} from "../redux/reducers/messageReducer";
import {getAllFirebaseMessages} from "../redux/middlewares/firebaseMessageMiddleWare";


function CurrentChatContainer() {
    const {chatId, userName} = useParams();
    const dispatch = useDispatch();
    const chat = useSelector(getChat(chatId), shallowEqual);
    const messages = useSelector(getMessagesByChat(chatId), shallowEqual);
    const [message, setMessage] = useState('');
    const author = useSelector(state => state.auth.user?.displayName ?? 'unknown user');
    const user = useSelector(state => state.auth);
    const headerUserName = () => {
        if (userName) {
            return <Typography variant="h6" sx={{textAlign: 'start'}}>
                {userName}'s chat's messages
            </Typography>
        }

    };
    useEffect(() => {
        dispatch(getAllFirebaseMessages());
    }, []);

    const userMessages = (array) => {
        return array.filter(item => item.author.toLowerCase() === userName)
    };
    const messagesUpdate = (e) => {
        e.preventDefault();
        // dispatch({type: 'ADD_MESSAGE_WITH_SAGA', payload: {message: message, author: author, chatId: chatId}});
        dispatch(addMessageWithThunk(message, author, Number(chatId)));
        dispatch(addMessageInitiate(message, chatId, user.user.uid,author))
        // addMessageToDb(message)
        setMessage('');
    }
    if (!chat.length || !chatId) {
        return <NoChat/>
    }

    return (
        <CurrentChat setMessage={setMessage}
                     messages={messages}
                     headerUserName={headerUserName}
                     userMessages={userMessages}
                     messagesUpdate={messagesUpdate}
                     author={author}
                     message={message}
        />
    )
        ;
}

export default CurrentChatContainer;