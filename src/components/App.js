import React from 'react';
import '../App.css';
import {ThemeProvider, createTheme} from "@mui/material";
import AppRoutes from "./routes";

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

    return (
        <ThemeProvider theme={theme}>
            <AppRoutes/>
        </ThemeProvider>
    );
}

export default App;
