import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="/counter">
        <Button children="Counter" variant="contained" />
      </Link>
    </div>
  );
};

export default Sidebar;
