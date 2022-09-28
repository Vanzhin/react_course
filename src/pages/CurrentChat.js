import React, {useState} from 'react';
import {useOutletContext, useParams} from "react-router-dom";
import MessageList from "../components/Messagelist";
import {Alert, Box, Button, Grid, TextField, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useTheme} from "@mui/material/styles";
import NoChat from "../components/NoChat";


function CurrentChat() {
    const {chatId, userName} = useParams();
    const [chats, messages, setMessages] = useOutletContext();

    const theme = useTheme();
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('Nikolay');

    const chatMessages = (array) => {
        return array.filter(item => item.chatId === Number(chatId))
    };
    const headerUserName = () => {
        if(userName){
            return <Typography variant="h6" sx={{textAlign: 'start'}}>
                {userName}'s chat's messages
            </Typography>
        }

    };

    const userMessages = (array) => {
        return array.filter(item => item.author.toLowerCase() === userName && item.chatId === Number(chatId))
    };
    const messagesUpdate = (e) => {
        e.preventDefault();
        setMessages([...messages, {text: message, author: author, id: Date.now(), chatId: Number(chatId)}]);
        setMessage('');
    }
    if (!chats[chatId] || !chatId) {
        return <NoChat/>
    }

    return (
        <div style={{margin: 5}}>
            <Grid container spacing={2}
                  display="flex"
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{m: 0}}>
                <Box component="form" sx={{background: theme.palette.primary.background, borderRadius: 2, p: 3,}}
                     onSubmit={messagesUpdate}>
                    <Grid container spacing={2}
                          direction="row"
                          justifyContent="center"
                          alignItems="center">
                        <Grid item xs={12}>
                            <TextField
                                label="From"
                                value={author}
                                autoFocus
                                onInput={(event) => setAuthor(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                value={message}
                                autoFocus
                                onInput={(event) => setMessage(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" sx={{
                                color: theme.palette.button.color,
                                background: theme.palette.button.background
                            }} type={"submit"}
                                    endIcon={<SendIcon/>}>send</Button>
                        </Grid>
                    </Grid>
                </Box>
                <div style={{margin:10}}>
                    {headerUserName()}
                    <MessageList messages={userMessages(messages)}/>
                </div>

            </Grid>
            <Typography variant="h3" component="h4" sx={{textAlign: 'start'}}>
                all chat's messages
            </Typography>
            <MessageList messages={chatMessages(messages)}/>
        </div>
    );
}

export default CurrentChat;