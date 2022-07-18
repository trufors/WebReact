import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator,updateTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        post: state.profile.posts,
    }
}
let mapDispatchToProps = (dispatch) => { return {
        addPosts: () =>  dispatch(addPostActionCreator()),
        updateNewTextArea: (text) => dispatch(updateTextActionCreator(text))
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;