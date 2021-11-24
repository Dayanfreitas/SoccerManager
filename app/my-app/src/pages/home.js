import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import authenticationService from "../services/authentication"

export default function Home(props) {
    const { nav } = props
    const history = useHistory(); 
    const [currentUser, setCurrentUser] = useState({
        name: "Dayan Freitas" 
    });


    useEffect(() => {
        setCurrentUser(authenticationService.getCurrentUser())
    }, [])


    return (
        <div>
            <Container>
                <p>
                    Seja bem vindo, { currentUser.name } !!
                </p>

                <Grid container>
                    <Grid item xs>
                        Gols: 10
                    </Grid>
                    <Grid item xs>
                        Assistência: 10
                    </Grid>
                </Grid>
            </Container>
            { nav() }
        </div>
    )
}
