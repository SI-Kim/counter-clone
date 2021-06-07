import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CounterContainer } from "../containers/index";

const Router = () => {
  return (
    <div style={{ height: "70vh" }}>
      <BrowserRouter>
        <Route path="/counter" component={CounterContainer} />
      </BrowserRouter>
    </div>
  );
};

export default Router;
