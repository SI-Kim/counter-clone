import React from "react";
import { Route } from "react-router-dom";
import { CounterContainer } from "../containers/index";

const Router = () => {
  return (
    <div className="Router" >
      <Route
        path="/counter"
        component={CounterContainer}
      />
    </div>
  );
};

export default Router;
