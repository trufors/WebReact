import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { addPostActionCreator,updateTextActionCreator } from '../../redux/profile-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => { return {
    addPosts: () =>  dispatch(addPostActionCreator()),
    updateNewTextArea: (text) => dispatch(updateTextActionCreator(text))
}
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UserContainer;