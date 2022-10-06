import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ChatsPage from "./ChatsPage";

function ChatsPageContainer(props) {
    const chats = useSelector(state => state.chats.chats);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch({type: 'chatDelete', payload: id})
    }

    return (
        <ChatsPage chats={chats} handleDelete={handleDelete}/>

    );
}

export default ChatsPageContainer;