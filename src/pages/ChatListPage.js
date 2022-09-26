import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import ChatList from "../components/ChatList";
import SendIcon from "@mui/icons-material/Send";
import MessageList from "../components/Messagelist";
import {useTheme} from "@mui/material/styles";
import HeaderLink from "../components/HeaderLink";
import {Outlet} from "react-router-dom";


function ChatListPage(props) {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([]);
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const theme = useTheme();
    const ListUpdate = (e) => {
        e.preventDefault();
        setMessageList([...messageList, {user: author, text: message, id: messageList.length + 1}]);
        setChatList([...chatList, {user: author, id: messageList.length + 1, createdAt: new Date()}])
        setAuthor('');
        setMessage('');
    }
    const messageAlert = (count, message) => {
        if (count > 0)
            alert(message + count)
    };
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [messageList]);
    useEffect(() => {
        setTimeout(messageAlert, 1500, messageList.length, 'message has been sent! total messages: ')
    }, [messageList]);
    return (
            <div className="App">
                <Grid container gap={5} sx={{background:theme.palette.secondary.background, p:2}}>
                    {chatList.map(item => (
                            <HeaderLink to={'/chats/'+item.id} key={item.id} >Chat id: {item.id}</HeaderLink>
                        )
                    )}
                </Grid>
                <Outlet context={{chatList:chatList, messageList:messageList}}/>
                <Grid container spacing={2}
                      direction="row"
                      justifyContent="center"
                      alignItems="self-start"
                      gap={1}
                      sx={{mt: 10}}>
                    <ChatList chatList={chatList}/>
                    <Box component="form" sx={{background: theme.palette.primary.background, borderRadius: 2, p: 3}}
                         onSubmit={ListUpdate}>
                        <p className={"showBlue"}>feedback</p>
                        <Grid container spacing={2}
                              direction="column"
                              justifyContent="center"
                              alignItems="stretch">
                            <Grid item xs={12}>
                                <TextField inputRef={inputRef} id="outlined-basic" label="Your name"
                                           variant="outlined"
                                           onInput={(event) => setAuthor(event.target.value)}
                                           value={author}></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={message}
                                           onInput={(event) => setMessage(event.target.value)}
                                           id="outlined-multiline"
                                           label="Message"
                                           multiline
                                           rows={4}
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
                    <MessageList messages={messageList}/>
                </Grid>
            </div>
    );
}

export default ChatListPage;