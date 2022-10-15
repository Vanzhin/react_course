import React from 'react';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageList from "../components/Messagelist";
import {useTheme} from "@mui/material/styles";

function CurrentChat({userMessages, messages, headerUserName, setMessage, messagesUpdate, author, message}) {
    const theme = useTheme();


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