import React from 'react';
import {Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";

function ProfilePage() {
    const theme = useTheme();
    const name = useSelector(state=>state.auth.user?.displayName ?? "unknown user")
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 10 }}>

        <Card sx={{ maxWidth: 345 }}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
            >                <Avatar sx={{ bgcolor: theme.palette.secondary.main, width: 100, height: 100 }}>{name[0].toUpperCase()}</Avatar>
            </Grid>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    {name.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Grid>

    );
}

export default ProfilePage;