import React, {useState} from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {ThemeContext, themes} from "../context/themes";
import {useDispatch} from "react-redux";

function Layout(props) {
    const [contextTheme, setContextTheme] = useState(themes.light);
    const changeTheme = (e) => {
        e.preventDefault();
        setContextTheme(themes[e.target.value])
    }

    return (
        <ThemeContext.Provider value={{contextTheme: contextTheme, changeTheme: changeTheme}}>
            <div style={{background: contextTheme.background, color: contextTheme.color}}>
                <header>
                    <Header/>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>

        </ThemeContext.Provider>

    );
}

export default Layout;