import React from 'react';
import { makeStyles } from '@material-ui/styles';

const Footer = () => {

    const classes = useStyle();

    return (
        <div className={classes.footerBox}>
            <p className={classes.footerTxt}>
                Footer
            </p>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    footerBox: {
        position: "absolute",
        bottom: "0",
        height: "5vh",
        backgroundColor: "black",
        width: "100%",
    },
    footerTxt: {
        color: 'white',
        paddingLeft: "4%",
        paddingBottom: "1%"
    }
}));

export default Footer;
