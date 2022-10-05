import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";
import {Button, Grid} from "@mui/material";
import HeaderLink from "../components/HeaderLink";
import {Outlet} from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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