import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { addFriendsActionCreator } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => { return {
        addFriends: () =>  dispatch(addFriendsActionCreator())
    }
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UserContainer;