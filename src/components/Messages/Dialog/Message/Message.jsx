import React from 'react';

import classes from './Message.module.css';


const Mess = (props) => {
  return <div className={classes.message} id = {props.id}>{props.text}</div>
};



export default Mess;