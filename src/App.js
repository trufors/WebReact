import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';

const App = (props) => {
  
  return (  
        <div className="wrapper">
          <Header />
          <Navbar />
          <div className="wrapper-content">
            <Routes>
              <Route path='profile' element = {<Profile  />} />
              <Route path = 'messages' element = {<MessagesContainer />} />
              <Route path = 'users' element = {<UsersContainer />} />
              <Route path = 'music' element = {<Music />} />
              <Route path = 'settings' element = {<Settings />} />s
            </Routes>
          </div>
        </div>  
  );
}

export default App;
