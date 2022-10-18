import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginInitiate, logoutInitiate} from "../redux/reducers/authReducer";
import {Box, Button, Card, CardActions, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!password || !email){
            return;
        }
        dispatch(loginInitiate(email,password));
    }
    if(user){
        navigate('/profile');

    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', minHeight: 100, padding:10}}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <Card sx={{
                    '& .MuiTextField-root': {m: 1,display:"flex", justifyContent:'flex-end', alignItems: 'center'},
                }}>

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
                    <CardActions sx={{display:'block'}}>
                        <Button size="large" type={"submit"}>Sign Up</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}

export default LoginPage;
