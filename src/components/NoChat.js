import React from 'react';
import {Alert} from "@mui/material";

function NoChat(props) {
    return (
        <div>
            <Alert severity="error">No chat selected! Please choose one.</Alert>
        </div>
    );
}

export default NoChat;