import React from 'react';
import MainContainer from './containers/MainContainer';
import './styles/index.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {

  return (
      <div>
        <Header />
        <MainContainer />
        <Footer />
      </div>
      
  );
}

export default App;
