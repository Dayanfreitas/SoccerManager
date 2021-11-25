import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { FormControl, InputLabel, Input, Button, Grid, Box } from "@material-ui/core";
import authenticationService from '../../services/authentication';

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authentication = () => {
        authenticationService.singIn({ email, password }).then((response) => {

            console.log('response', response)
            if (response.status == 201) {
                history.push('/')
                window.location.reload(true)
            }
        })
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={12}>
                <form >
                    <Box sx={{
                        display: 'grid',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <FormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </FormControl>


                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </FormControl>
                    </Box>

                    <Box  sx={{
                        display: 'grid',
                        marginTop: 5
                    }}>
                        <Button color="primary" variant="outlined" onClick={authentication}>Logar</Button>
                    </Box>
                </form>
            </Grid>
        </Grid>
    )
}
