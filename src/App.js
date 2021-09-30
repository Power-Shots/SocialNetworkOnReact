import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <main className="app-wrapper-content">
        {/* <Profile/> */}
        <Dialogs/>
      </main>
      
      
    </div>
  );
}

export default App;
