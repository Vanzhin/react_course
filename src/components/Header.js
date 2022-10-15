import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Button, FormControl, FormHelperText, Grid, MenuItem, Select} from "@mui/material";
import HeaderLink from "./HeaderLink";
import {ThemeContext, themes} from "../context/themes";
import {logoutInitiate} from "../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";

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


function Header() {

    const {contextTheme, changeTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.user?.displayName ?? 'unknown user');
    const user = useSelector(state => state.auth.user);
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutInitiate())

    }
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        Hello, {name}
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
                    <div>
                        {!user ? (<div>
                                    <Button><HeaderLink to={'/register'}>Sign Up</HeaderLink></Button>
                                    <Button><HeaderLink to={'/login'}>Login</HeaderLink></Button>
                                </div>
                        ) : (
                            <Button onClick={(e) => handleLogout(e)}
                                    sx={{
                                        background: contextTheme.background,
                                        color: contextTheme.color
                                    }}>Logout</Button>)}
                    </div>
                </Toolbar>

            </AppBar>
        </Box>
    );
}

export default Header;
