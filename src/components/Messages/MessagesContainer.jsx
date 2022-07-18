import Messages from './Messages';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';




let mapStoreToProps = (state) => {return {
    dialogs: state.dialogs.dialog,
    message: state.dialogs.messages,
    newMessageText: state.dialogs.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {return {
    updateArea: (text) => { dispatch(updateMessageActionCreator(text)) },
    updateMess: () => { dispatch(addMessageActionCreator()) }
  }
} 

const MessagesContainer = connect(mapStoreToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;