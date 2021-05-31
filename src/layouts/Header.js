import React from 'react';
import { makeStyles } from "@material-ui/styles";

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.headerBox}>
            Header
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    headerBox: {
        backgroundColor: "black",
        color: "white",
        margin: "0 auto",
        overflow: "hidden",
        height: "5%"
    },
}));

export default Header;
