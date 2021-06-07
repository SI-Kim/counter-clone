import React from "react";
import Router from "../route/Router";
import { makeStyles } from "@material-ui/styles";

const Main = () => {
  const classes = useStyle();

  return (
    <div className={classes.Main}>
      <Router />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  Main: {
    height: "90vh",
    width: "75vw",
    float: "right",
  }
}));

export default Main;
