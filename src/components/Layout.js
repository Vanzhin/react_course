import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function Layout(props) {
    return (
        <>
            <header>
                <Header name={props.name}/>
            </header>
            <main >
                <Outlet/>
            </main>
            <footer>
                <Footer name={props.name}/>
            </footer>
        </>

    );
}

export default Layout;