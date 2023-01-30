import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navs from './Navs';
import {UserProvider} from './context/userContext';
import {DarkProvider} from './context/DarkmodeContext'

function App() {
  return (

      <UserProvider>
        <DarkProvider>
      <Navs />
      </DarkProvider>
      </UserProvider>
      
  );
}

export default App;
