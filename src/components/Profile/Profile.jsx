import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts  newPostText={props.newPostText} post = {props.post} addPost = {props.addPost} updateTextArea={props.updateTextArea} />
        </div>
        
    )
}

export default Profile;