import React, {useState} from 'react';
import {Box, Button, Card, CardActions, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {registerInitiate} from "../redux/reducers/authReducer";

function RegisterPage(props) {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return;
        }
        dispatch(registerInitiate(displayName, email, password))
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', minHeight: 100, padding: 10}}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <Card sx={{
                    '& .MuiTextField-root': {m: 1, display: "flex", justifyContent: 'flex-end', alignItems: 'center'},
                }}>

                    <TextField
                        label="Name"
                        type="text"
                        value={displayName}
                        onInput={(event) => setDisplayName(event.target.value)}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onInput={(event) => setEmail(event.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onInput={(event) => setPassword(event.target.value)}
                    />
                    <TextField
                        label="Confirm password"
                        type="password"
                        value={confirmPassword}
                        onInput={(event) => setConfirmPassword(event.target.value)}
                    />
                    <CardActions sx={{display: 'block'}}>
                        <Button size="large" type={"submit"}>Sign Up</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}

export default RegisterPage;