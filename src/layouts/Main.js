import React from "react";
import Router from "../route/Router";
import { makeStyles } from "@material-ui/styles";

const Main = () => {
  const classes = useStyle();

  return (
    <div className="Main">
      <Router />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  Main: {
    height: "90vh",
    width: "90vw",
    float: "right"
  }
}));

export default Main;
