import React from 'react';
import { makeStyles } from "@material-ui/styles";

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.headerBox}>
            <p className={classes.headerTxt}>COUNTER & MEMO APP</p>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    headerBox: {
        backgroundColor: "black",
        height: "5vh",
        marginTop: "0"
    },
    headerTxt: {
        color: "white",
        marginTop: "0",
        paddingLeft: "5%",
        paddingTop: "1%"
    }
}));

export default Header;
