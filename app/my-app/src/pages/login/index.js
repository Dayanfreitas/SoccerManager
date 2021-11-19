import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import {FormControl, InputLabel, Input, div, Typography, Container, Button, FormHelperText, Grid, Paper } from "@material-ui/core";

import authenticationService from '../../services/authentication';

export default function Login () {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authentication = () => {
        

        console.log("Login")
        authenticationService.post({email, password})

        // console.log("email", email)
        // console.log("password", password)

    } 
    
    return (
        <Container>
            <Typography variant="h3">
                Login
            </Typography>
            
            <form >
                <Grid container spacing={12}>
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </FormControl>
                </Grid >

                <Grid >
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </FormControl>                
                </Grid >

                <Grid container>
                    <Button color="primary" variant="outlined" onClick={authentication}>Logar</Button>
                    <Button color="secondary" variant="outlined" onClick={() => { history.push('/') }}>Voltar</Button>
                </Grid >
            </form>
        </Container>
    )
}
