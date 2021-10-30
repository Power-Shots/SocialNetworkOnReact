import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <main className="app-wrapper-content">
          {/* <Route path="/profile" component={Profile}/> */}
          <Route path="/dialogs" component={Dialogs}/>

          <Route path="/profile" render={() => <Profile/>}/>
          <Route path="/dialogs" render={()=> <Dialogs/>}/>
        </main>      
      </div>
    </BrowserRouter>
  );
}

export default App;
