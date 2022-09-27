import React, {useState} from 'react';
import {useOutletContext, useParams} from "react-router-dom";
import MessageList from "../components/Messagelist";
import {Box, Button, Grid, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useTheme} from "@mui/material/styles";
import NoChat from "../components/NoChat";


function CurrentChat() {
    const {chatId} = useParams();
    const [chats, setChats] = useOutletContext();
    const theme = useTheme();
    const [message, setMessage] = useState('');
    const messagesUpdate = (e) => {
        e.preventDefault();
        const updated = chats;
        updated[chatId].messages.push({text: message, author: 'test', id: updated[chatId].messages.length + 1 });
        setChats(updated);
        setMessage('');
    }
    if (!chats[chatId] || !chatId){
        return <NoChat />
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
                                id="outlined-multiline"
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
            </Grid>
            <MessageList messages={chats[chatId].messages}/>
        </div>
    );
}

export default CurrentChat;