import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


function MessageList({messages}) {
    const theme = useTheme();
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
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline', color: 'black'}}
                                        component="span"
                                        variant="body1"
                                        color="text.primary"
                                    >
                                        {item.author} wrote
                                    </Typography>

                                    <Typography
                                        sx={{display: 'block', color: 'black'}}
                                        component="div"
                                        variant="body1"
                                        color="text.primary"
                                    >
                                        {item.text}
                                    </Typography>

                                </React.Fragment>
                            }

                        />
                    </ListItem>
                    ))}
            </List>

        );
    }

}

export default MessageList;