import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Grid} from "@mui/material";
import HeaderLink from "./HeaderLink";

const navItems = [
    {
        to: '/',
        name: 'Home'
    },
    {
        to: '/chats',
        name: 'Chats'
    },
    {
        to: '/profile',
        name: 'Profile'
    },
    // {
    //     to: '/chat-test',
    //     name: 'Chat test'
    // },
];


function Header(props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        Hello, {props.name}
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        <Grid container gap={5}>
                            {navItems.map(item => (
                                    <HeaderLink to={item.to} key={item.name}>{item.name}</HeaderLink>
                                )
                            )}
                        </Grid>

                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
