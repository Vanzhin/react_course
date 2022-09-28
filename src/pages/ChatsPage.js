import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";
import {Button, Grid} from "@mui/material";
import HeaderLink from "../components/HeaderLink";
import {Navigate, Outlet, Route, useParams} from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function ChatsPage(props) {
    const theme = useTheme();
    const initialChats = {
        1: {
            name: "Chat1",
            messages: [{text: "FirstMessage", author: 'test', id: 1,}],
        },
        2: {
            name: "Chat2",
            messages: [{text: "FirstMessageHereToo!", author: 'test', id: 1,}],
        },
    };
    const initialMessages = [
        {text: "FirstMessage", author: 'test', id: 1, chatId: 1},
        {text: "FirstMessageHereToo!", author: 'test', id: 2, chatId: 2}
    ]

    const [chats, setChats] = useState(initialChats);
    console.log(chats);
    const ChatsCreate = () => {
        let id = 1;
        if (Object.keys(chats).length) {
            id = Number(Object.keys(chats)[Object.keys(chats).length - 1]) + 1;
        }
        const updated = chats;
        updated[id] = {
            name: "Chat" + id,
            messages: [],
        }
        setChats({...updated});
    }
    const ChatsDelete = (id) => {
        const updated = chats;
        delete updated[id]
        setChats({...updated});
    }

    return (
        <div className="App" style={{margin: 20}}>
            <Grid container gap={5} sx={{background: theme.palette.secondary.background, p: 2}}>
                {Object.keys(chats).map((id, i) => (
                        <HeaderLink to={'/chats/' + id} key={i}>Chat id: {id}
                            <HighlightOffIcon sx={{color: theme.palette.button.danger}}
                                              onClick={() => ChatsDelete(id)}/>
                        </HeaderLink>
                    )
                )}
            </Grid>
            <Button variant="outlined" endIcon={<AddCircleOutlineIcon/>} onClick={ChatsCreate}>create new chat</Button>
            <Outlet context={[chats, setChats]}/>
        </div>
    );
}

export default ChatsPage;