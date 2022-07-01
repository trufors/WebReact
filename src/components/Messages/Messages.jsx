import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './Messages.module.css';


const Mess = (props) => {
  return <div className={classes.message} id = {props.id}>{props.text}</div>
};

let linkMessage = React.createRef()

const newMessage = ()=>{
  let text = linkMessage.current.value
  console.log(text)
}


const Messages = (props) => {
  let dialogsArray = props.dialogs.map((dialog)=><Dialog name = {dialog.name} id = {dialog.id}/>);
  let messArray = props.message.map(message => <Mess text = {message.text} id = {message.id} />);
    return (
        <div className = {classes.dialogs}>
          <div className= {classes.dialogsItem}>
            {dialogsArray}
          </div>
          <div className = {classes.messages}>
            {messArray}
            <textarea ref = {linkMessage}/>
            <button onClick={newMessage}></button>
          </div>
        </div>
        
    )
}

export default Messages;