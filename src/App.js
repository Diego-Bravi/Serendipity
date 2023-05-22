import React from 'react';

import { Navbar } from './components';
import { Upload } from './containers';
import { Header } from './containers';
import './App.css';

const App = () => (
  <div>
     
    <Navbar />
    <Upload />
    <Header/>
  </div> 
);

export default App;
