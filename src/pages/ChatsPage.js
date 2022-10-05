import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";
import {Button, Grid} from "@mui/material";
import HeaderLink from "../components/HeaderLink";
import {Outlet} from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useDispatch, useSelector} from "react-redux";

function ChatsPage(props) {
    const theme = useTheme();
    const chats = useSelector(state => state.chats.chats);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch({type: 'chatDelete', payload: id})
    }
    const thunk = (store) => (next) => (action) => {
        console.log(store, action)
        return next(action);
    };
    return (
        <div className="App" style={{margin: 20}}>
            <Grid container gap={5} sx={{background: theme.palette.secondary.background, p: 2}}>
                {chats.map((chat) => (
                        <HeaderLink to={'/chats/' + chat.id} key={chat.id}>Chat name: {chat.name}
                            <HighlightOffIcon sx={{color: theme.palette.button.danger}}
                                              onClick={() => (handleDelete(chat.id))}/>
                        </HeaderLink>
                    )
                )}
            </Grid>
            <Button variant="outlined" endIcon={<AddCircleOutlineIcon/>} onClick={()=>dispatch({type: 'chatCreate'})}>create new chat</Button>
            <Outlet />
        </div>
    );
}

export default ChatsPage;