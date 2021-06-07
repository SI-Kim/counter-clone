import React from "react";
import MainContainer from "./containers/MainContainer";
import "./styles/index.css";
import { Header, Footer, Sidebar } from "./layouts/index";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
