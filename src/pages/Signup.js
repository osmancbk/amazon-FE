import React from 'react'
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({ //
    wrapper: {
        marginTop: '5rem',
    }
}); 

function Sigup() {
    const signupStyles = styles(); //

    return (
        <Container className={signupStyles.wrapper} maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>Hello World</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>Hello World</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Sigup;