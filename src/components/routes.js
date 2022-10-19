import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ChatsPageContainer from "../pages/ChatsPageContainer";
import NoChat from "./NoChat";
import CurrentChatContainer from "../pages/CurrentChatContainer";
import CommentsPage from "../pages/CommentsPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import {auth} from "../services/firebase";
import PrivateRoute from "../hocs/PrivateRoute";
import PublicRoute from "../hocs/PublicRoutes";

function AppRoutes() {
    const [authed, setAuthed] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

    return (
        <Routes>
            <Route exact path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'register'} element={<PublicRoute authed={authed}>
                    <RegisterPage/>
                </PublicRoute>}/>
                <Route path={'login'} element={<PublicRoute authed={authed}>
                    <LoginPage/>
                </PublicRoute>}/>
                <Route path={'profile'} element={<PrivateRoute authed={authed}>
                    <ProfilePage/>
                </PrivateRoute>}/>
                {/*<Route path={'chat-test'} element={<ChatListPage/>}/>*/}
                <Route path={'chats'} element={
                    <PrivateRoute authed={authed}>
                        <ChatsPageContainer/>
                    </PrivateRoute>}>
                    <Route index element={<NoChat/>}/>
                    <Route path={':chatId/'} element={<CurrentChatContainer/>}/>
                    <Route path={':chatId/:userName'} element={<CurrentChatContainer/>}/>
                    <Route path={'nochat'} element={<NoChat/>}/>
                </Route>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage to={'/'}>Home</NotFoundPage>}/>
        </Routes>
    );
}

export default AppRoutes;