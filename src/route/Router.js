import React from "react";
import { Route } from "react-router-dom";
import { CounterContainer, TodoContainer } from "../containers/index";

const Router = () => {
  return (
    <div className="Router" >
      <Route
        path="/counter"
        component={CounterContainer}
      />
      <Route
        path="/todo"
        component={TodoContainer}
      />
    </div>
  );
};

export default Router;
