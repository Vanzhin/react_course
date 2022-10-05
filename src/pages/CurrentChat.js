import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import MessageList from "../components/Messagelist";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useTheme} from "@mui/material/styles";
import NoChat from "../components/NoChat";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getChat} from "../store/chats/selectors";
import {getMessagesByChat} from "../store/messages/selectors";
import {addMessageWithThunk} from "../redux/middlewares/messageMiddleWare";
import {addMessage} from "../redux/reducers/messageReducer";


function CurrentChat() {
    const {chatId, userName} = useParams();
    const dispatch = useDispatch();
    const chat = useSelector(getChat(chatId), shallowEqual);
    const messages = useSelector(getMessagesByChat(chatId), shallowEqual);
    const theme = useTheme();
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('Nikolay');
    const headerUserName = () => {
        if (userName) {
            return <Typography variant="h6" sx={{textAlign: 'start'}}>
                {userName}'s chat's messages
            </Typography>
        }

    };
    const userMessages = (array) => {
        return array.filter(item => item.author.toLowerCase() === userName)
    };
    const messagesUpdate = (e) => {
        e.preventDefault();

        dispatch(addMessageWithThunk(message, author, Number(chatId)))
        setMessage('');
    }
    if (!chat.length || !chatId) {
        return <NoChat/>
    }
    const addMessageWithThunk = (message, author, chatId) => (dispatch, getState) => {
        dispatch(addMessage({message: message, author: author, chatId: Number(chatId)}));
        if (author !== 'chatbot') {
            setTimeout(() => dispatch(addMessage({
                message: "hello, " + author,
                author: 'chatbot',
                chatId: Number(chatId)
            })), 1000);

        }

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
                <div style={{margin: 10}}>
                    {headerUserName()}
                    <MessageList messages={userMessages(messages)}/>
                </div>

            </Grid>
            <Typography variant="h3" component="h4" sx={{textAlign: 'start'}}>
                all chat's messages
            </Typography>
            <MessageList messages={messages}/>
        </div>
    );
}

export default CurrentChat;