import React from 'react';
import {NavLink} from "react-router-dom";
import {useMatch} from "react-router-dom";
import {useTheme} from "@mui/material/styles";

function HeaderLink({to, children}) {
    const match = useMatch(to);
    const theme = useTheme();
    return (
        <NavLink to={to}
                 style={{color: match ? theme.palette.link.active : theme.palette.link.passive}}>{children}</NavLink>
    );
}

export default HeaderLink;