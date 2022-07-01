import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { subscribe, addPost, updateTextArea } from './state';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = () =>{
  
  root.render(
  <React.StrictMode>
    <App state = {state} updateTextArea={updateTextArea} addPost = {addPost}/>
  </React.StrictMode>
);
}
reRender()
subscribe(reRender)


reportWebVitals();
