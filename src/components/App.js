import React from 'react';
import '../App.css';
import {ThemeProvider, useTheme, createTheme} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChatListPage from "../pages/ChatListPage";
import ProfilePage from "../pages/ProfilePage";
import Layout from "./Layout";
import NotFoundPage from "../pages/NotFoundPage";
import CurrentChat from "../pages/CurrentChat";
import NoChat from "./NoChat";
import ChatsPage from "../pages/ChatsPage";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#5e00ff",
                addition: "#7b00ff",
                background: "#c1a6ea",
            }, secondary: {
                main: "#0098FF",
                background: "#80e1ff"
            }, button: {
                color: "#6b6b6b",
                danger: "#ff3333",
                background: "#acfca7",
            }, link: {
                passive: "#a795ec",
                active: "#ffffff",
            }
        },
    });

    const name = 'Nikolay';
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route exact path={'/'} element={<Layout name={name}/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'profile'} element={<ProfilePage name={name}/>}/>
                    {/*<Route path={'chat-test'} element={<ChatListPage/>}/>*/}
                    <Route path={'/chats'} element={<ChatsPage/>}>
                        <Route index element={<NoChat/>}/>
                        <Route path={':chatId'} element={<CurrentChat/>}/>
                        <Route path={'nochat'} element={<NoChat/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage to={'/'}>Home</NotFoundPage>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
