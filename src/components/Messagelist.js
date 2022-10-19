import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';
import {NavLink, useParams} from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {useDispatch, useSelector} from "react-redux";
import {deleteMassage} from "../redux/reducers/messageReducer";
import {deleteMessageWithFirebase} from "../redux/reducers/firebaseMessageReducer";

function MessageList({messages}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {chatId} = useParams();

    const handleDelete = (id, chatId) => {
        dispatch(deleteMassage(id))
        dispatch(deleteMessageWithFirebase(id, chatId))
    }
    if (messages.length > 0) {
        return (
            <List sx={{width: '100%', maxWidth: 360, bgcolor: theme.palette.secondary.background, borderRadius: 2}}>
                {messages.map(item => (
                    <ListItem alignItems="flex-start" key={item.id}>
                        <ListItemAvatar>
                            <Avatar alt={item.author.toUpperCase()} src="/static/images/avatar/1.jpg"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <Typography
                                            sx={{display: 'inline', color: 'black'}}
                                            component="span"
                                            variant="body1"
                                            color="text.primary"
                                        >
                                            <NavLink
                                                to={`/chats/${chatId}/${item.author.toLowerCase()}`}>{item.author}</NavLink>
                                            <span> wrote</span>
                                        </Typography>

                                        <Typography
                                            sx={{display: 'block', color: 'black'}}
                                            component="div"
                                            variant="body1"
                                            color="text.primary"
                                        >
                                            {item.text}
                                        </Typography>
                                    </div>

                                    <HighlightOffIcon sx={{color: theme.palette.button.danger}}
                                                      onClick={() => handleDelete(item.id, item.chatId)}/>
                                </div>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        );
    } else {
        return <Typography variant="h6" sx={{textAlign: 'start'}}>
            no message yet
        </Typography>
    }

}

export default MessageList;