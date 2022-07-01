import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className = {classes.nav}>
      <ul>
        <li className = {classes.item}><NavLink to ="/profile" className = {classes.link}>Profile</NavLink></li>
        <li className = {classes.item}><NavLink to ="/messages" className = {classes.link}>Messages</NavLink></li>
        <li className = {classes.item}><NavLink to ="/news" className = {classes.link}>News</NavLink></li>
        <li className = {classes.item}><NavLink to ="/music" className = {classes.link}>Music</NavLink></li>
        <li className = {classes.item}><NavLink to ="/settings" className = {classes.link}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;