import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
