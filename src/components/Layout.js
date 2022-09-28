import React, {useState} from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {ThemeContext, themes} from "../context/themes";

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
                    <Header name={props.name}/>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    <Footer name={props.name}/>
                </footer>
            </div>

        </ThemeContext.Provider>

    );
}

export default Layout;