import React from 'react';
import {Button, Grid} from "@mui/material";
import HeaderLink from "../components/HeaderLink";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {Outlet} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {useDispatch} from "react-redux";

function ChatsPage({ chats, handleDelete}) {
    const theme = useTheme();
    const dispatch = useDispatch();

    return (
        <div className="App" style={{margin: 20}}>
            <Grid container gap={5} sx={{background: theme.palette.secondary.background, p: 2}}>
                {chats.map((chat) => (
                        <HeaderLink to={'/chats/' + chat.id} key={chat.id}>Chat id: {chat.id}
                            <HighlightOffIcon sx={{color: theme.palette.button.danger}}
                                              onClick={() => (handleDelete(chat.id))}/>
                        </HeaderLink>
                    )
                )}
            </Grid>
            <Button variant="outlined" endIcon={<AddCircleOutlineIcon/>} onClick={() => dispatch({type: 'chatCreate'})}>create
                new chat</Button>
            <Outlet/>
        </div>
    );
}

export default ChatsPage;