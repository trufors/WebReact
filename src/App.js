import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = (props) => {
  
  return (
    <BrowserRouter>
    
     
        <div className="wrapper">
          <Header />
          <Navbar />
          <div className="wrapper-content">
            <Routes>
              <Route path='profile' element = {<Profile post = {props.state.profile.posts} 
                    newPostText = {props.state.profile.newPostText } 
                    addPost = {props.addPost} 
                    updateTextArea={props.updateTextArea}
                    />} />
              <Route path = 'messages' element = {<Messages dialogs = {props.state.dialogs.dialog} message = {props.state.dialogs.messages} />} />
              <Route path = 'news' element = {<News />} />
              <Route path = 'music' element = {<Music />} />
              <Route path = 'settings' element = {<Settings />} />s
            </Routes>
          </div>
        </div>  
    </BrowserRouter>
  );
}

export default App;
