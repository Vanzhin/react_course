import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import HeaderLink from "./HeaderLink";
import {ThemeContext, themes} from "../context/themes";

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
    {
        to: '/comments',
        name: 'Comments'
    },
];


function Header(props) {
    const {contextTheme, toggleTheme, changeTheme} = useContext(ThemeContext);
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
                            <FormControl sx={{background: contextTheme.background, color: contextTheme.color}}
                                         size="small">
                                <Select
                                    defaultValue={'light'}
                                    // value={age}
                                    onChange={changeTheme}
                                >
                                    {Object.keys(themes).map((item) => (
                                            <MenuItem key={themes[item].name}
                                                      value={themes[item].name}>{themes[item].name}</MenuItem>
                                        )
                                    )}
                                </Select>
                                <FormHelperText>theme change</FormHelperText>

                            </FormControl>
                        </Grid>

                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
