import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css'


const Dialog = (props) => {
  let path = '/message/' + props.id
    return (
      <div className={classes.item}>
        <NavLink to = {path} >{props.name}</NavLink>
        
      </div>
           
    )
}

export default Dialog;