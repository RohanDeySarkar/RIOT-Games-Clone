import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
