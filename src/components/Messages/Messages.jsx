import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './Messages.module.css';
import Mess from './Dialog/Message/Message';


const Messages = (props) => {

  let linkMessage = React.createRef()

  const newMessage = ()=>{
    props.updateMess()  
  }

  const backUp = () => {
    let text = linkMessage.current.value
    props.updateArea(text)
  }

  let dialogsArray = props.dialogs.map((dialog)=><Dialog name = {dialog.name} id = {dialog.id}/>);
  let messArray = props.message.map(message => <Mess text = {message.text} id = {message.id} />);
    return (
        <div className = {classes.dialogs}>
          <div className= {classes.dialogsItem}>
            {dialogsArray}
          </div>
          <div className = {classes.messages}>
            {messArray}
            <textarea onChange = {backUp} value={props.newMessageText} ref = {linkMessage}/>
            <button onClick={newMessage}>otpravit</button>
          </div>
        </div>
        
    )
}

export default Messages;