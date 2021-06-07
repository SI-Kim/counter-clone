import React from "react";
import "./styles/index.css";
import { Header, Footer, Sidebar, Main } from "./layouts/index";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
