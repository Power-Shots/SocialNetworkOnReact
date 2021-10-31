import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
   
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <main className="app-wrapper-content">
         

          <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
          <Route path="/dialogs" render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
        </main>      
      </div>
    </BrowserRouter>
  );
}

export default App;
