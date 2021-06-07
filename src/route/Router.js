import React from "react";
import { Route } from "react-router-dom";
import { CounterContainer } from "../containers/index";

const Router = () => {
  return (
    <div className="Router" style={{ height: "70vh" }}>
      <Route
        path="/counter"
        component={CounterContainer}
        style={{ height: "70vh" }}
      />
    </div>
  );
};

export default Router;
