import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';

function App(){
  return(
    <>
      <Header />
      <MainContent />
      <Footer /> 
    </>
  )
}


const root = (
  ReactDOM.createRoot(document.querySelector("#root"))
)

root.render(<App />);