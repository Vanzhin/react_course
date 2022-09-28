import {createContext} from "react";

export const themes = {
    light: {
        name: 'light',
        background: '#bdbdbd',
        color: '#3b3b3b'
    },
    dark: {
        name: 'dark',
        background: '#3b3b3b',
        color: '#bdbdbd'
    },
    blue: {
        name: 'blue',
        background: '#65739a',
        color: '#bdbdbd'
    }
}
export const ThemeContext = createContext({contextTheme:themes.light, changeTheme: (event) => {}})