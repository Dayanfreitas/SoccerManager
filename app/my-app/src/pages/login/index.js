import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { FormControl, InputLabel, Input, Typography, Container, Button, Grid, Box } from "@material-ui/core";
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
            }
        })
    }

    return (

        <Container>
            <Typography variant="h3">
                Login
            </Typography>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={12}>
                    {/* <LoginForm /> */}
                    <form >
                        <Box sx={{
                            display: 'grid',
                            // gridTemplateColumns: 'repeat(1, 1fr)',
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

                        <Grid container>
                            <Grid item xs>
                                <Button color="primary" variant="outlined" onClick={authentication}>Logar</Button>
                            </Grid>
                            <Grid item xs>
                                <Button color="secondary" variant="outlined" onClick={() => { history.push('/') }}>Voltar</Button>

                            </Grid>
                        </Grid>
                    </form>
                </Grid>

            </Grid>
            {/* <form >
                <Box sx={{
                    display: 'grid',
                    // gridTemplateColumns: 'repeat(1, 1fr)',
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

                <Grid container>
                    <Button color="primary" variant="outlined" onClick={authentication}>Logar</Button>
                    <Button color="secondary" variant="outlined" onClick={() => { history.push('/') }}>Voltar</Button>
                </Grid >
            </form> */}
        </Container>
    )
}
