import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const Sidebar = () => {
  const classes = useStyle();

  return (
    <div className={classes.sideBox}>
      <Link to="/counter">
        <Button
          children="Counter"
          variant="contained"
          className={classes.btn}
        />
      </Link>
      <Button children="To do" variant="contained" className={classes.btn} />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  sideBox: {
    width: "25vw",
    height: "90vh",
    backgroundColor: "grey",
    textAlign: "center"
  },
  btn: {
    margin: "8%",
    width: "80%"
  }
}));

export default Sidebar;
