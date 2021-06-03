import React from 'react';
import {
    Paper,
    Grid,
    Button,
    Input,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Counter = () => {

    const classes = useStyle();

    return (
        <div>
            <Paper className={classes.outterPaper}>
                <Paper className={classes.numberPaper}>
                    <Grid item xs={12} container justify="center">
                        <h1 className={classes.numberH1}>0</h1>
                    </Grid>
                </Paper>
                <Grid container>
                    <Grid item xs={6} sm={6} styles={{ margin: "0 auto"}}>
                        <Input
                            className={classes.diffInput}
                            type="number"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button
                            style={{ marginBottom: "5%" }}
                            variant="contained"
                            className={classes.buttons}

                        >
                            +
                        </Button>
                        <br />
                        <Button
                            variant="contained"
                            className={classes.buttons}

                        >
                            -
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}  

const useStyle = makeStyles((theme) => ({
    outterPaper: {
        margin: "0 auto",
        width: "90%",
        backgroundColor: "#FFFFF0",
        height: "40%",
        marginTop: "5%",
        marginBottom: "5%",
        paddingTop: "5%",
        minHeight: "232px",
        textAlign: "center",
    },
    numberPaper: {
        width: "50%",
        height: "50%",
        margin: "0 auto",
        minHeight: "80px",
        marginBottom: "20px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    numberH1: {
        textAlign: "center"
    },
    diffInput: {
        alignItems: "center",
        marginTop: "3%",
        width: "80%",
        height: "50%"
    },
    buttons: {
        width: "50%",
        height: "37%",
        backgroundColor: "#FFEBCD"
    },
}));

export default Counter;
